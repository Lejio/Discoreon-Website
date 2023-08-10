import { stripe } from "@/utils/stripe"
import { NextResponse } from "next/server"
import { SITE_URL } from "@/utils/globals";

export async function GET(request: Request) {
    const prod_id = request.url.slice(request.url.lastIndexOf('/') + 1)

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: prod_id,
          quantity: 1,
        },
      ],
      success_url: `${SITE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITE_URL}/premium`,
      mode: "subscription",
      payment_method_types: ["card", "paypal"],
    });

    return NextResponse.json( {
        checkout_url: session.url,
        status: 200
    } )
}