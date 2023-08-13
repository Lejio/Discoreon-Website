import { stripe } from "@/utils/stripe";
import Stripe from "stripe";
import { supabase } from "@/utils/supabase";
import { NextResponse } from "next/server";
import { test } from "node:test";


// In order to test this, I have to start a ngrok server (npx ngrok http 3000) and add the endpoint + the route to this path into stripe. Also the signing secret changes.
export async function POST(request: Request) {
  const buffer = await request.text();
  const signature = request.headers.get("stripe-signature");
  const signingSecret = process.env.STRIPE_SIGNING_SECRET_KEY;
  let event: Stripe.Event;

  try {
    if (!signature || !signingSecret) return;
    event = stripe.webhooks.constructEvent(buffer, signature, signingSecret);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(`❌ Error message: ${error.message}`);
      return new Response(`Webhook Error: ${error.message}`, {
        status: 400,
      });
    }
  }

  try {
    // Handle the event
    switch (event!.type) {
      case "customer.subscription.deleted":
        const customerSubscriptionDeleted = event!.data
          .object as Stripe.Subscription;
        await deleteSubscription(customerSubscriptionDeleted);
        // Then define and call a function to handle the event customer.subscription.deleted
        break;
      case "customer.subscription.updated":
        const customerSubscriptionUpdated = event!.data
          .object as Stripe.Subscription;
        await updateSubscription(customerSubscriptionUpdated);
        // Then define and call a function to handle the event customer.subscription.updated
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event!.type}`);
    }
  } catch (error: unknown) {
    console.log(error);
  }

  return NextResponse.json({
    success: true,
  });
}

async function updateSubscription(event: Stripe.Subscription) {
  const customer_id = event.customer;
  const subscription_id = event.id;
  const price_id = event.items.data[0].price.id;
  const subscription_status = event.status;

  console.log("customer_id")
  console.log(customer_id);
  const { data: test_subscription, error } = await supabase
    .from("test_subscription")
    .select("*")
    .eq("stripe_customer_id", customer_id);
  console.log(test_subscription?.length)
  if (test_subscription?.length !== 0) {
    console.log("Update customer");
    const { data: test_subscription, error } = await supabase
      .from("test_subscription")
      .update({
        created_at: Date.now().toString(),
        subscription_id: subscription_id,
        subscription_status: subscription_status.toString(),
        price_id: price_id,
      })
      .eq("stripe_customer_id", customer_id)
      .select();

      console.log(error)
  } else {
    console.log("Add customer");
    const { data: test_subscription, error } = await supabase
      .from("test_subscription")
      .insert([
        {
          stripe_customer_id: customer_id.toString(),
          subscription_id: subscription_id,
          price_id: price_id,
          subscription_status: subscription_status.toString(),
        },
      ])
      .select();
      console.log(test_subscription);
  }
}

async function deleteSubscription(event: Stripe.Subscription) {
    const customer_id = event.customer;
    const subscription_status = event.status;
    const { data: test_subscription, error } = await supabase
      .from("test_subscription")
      .update({
        subscription_status: subscription_status.toString(),
      })
      .eq("stripe_customer_id", customer_id)
      .select();
}
