import { stripe } from "@/utils/stripe";
// import { headers } from "next/headers";
import { NextResponse } from "next/server";
// import getRawBody from "raw-body";

export async function POST(request) {
  //   const headersList = headers();
  const buffer = await request.text();
  const signature = request.headers.get("stripe-signature");
  const signingSecret = process.env.STRIPE_SIGNING_SECRET_KEY;
  let event;

  try {
    if (!signature || !signingSecret) return;
    event = stripe.webhooks.constructEvent(buffer, signature, signingSecret);
  } catch (err) {
    console.log(`❌ Error message: ${err.message}`);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  console.log(event);

  //   if (relevantEvents.has(event.type)) {
  //     try {
  //       switch (event.type) {
  //         case "product.created":
  //             console.log()
  //           break;
  //         case "product.updated":
  //           break;
  //         default:
  //           throw new Error("Unhandled relevant event!");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       return new Response("Webhook handler failed. View logs.", {
  //         status: 400,
  //       });
  //     }
  //   }
  //   return new Response(JSON.stringify({ received: true }));

  //   console.log(event);
  return NextResponse.json({
    success: true,
  });
}
