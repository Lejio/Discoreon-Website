import React from "react";
import ProductCard from "./ProductCard";
import { stripe } from "@/utils/stripe";

const ProductSection = async () => {
  const response = await stripe.prices.list({ limit: 3 });
  const products = response.data;

  const plans = []

  for (const prod of products) {
    const product = await stripe.products.retrieve(prod.product)
    plans.push({
      name: product.name,
      id: prod.id,
      price: prod.unit_amount / 100,
      currency: prod.currency,
      interval: prod.recurring ? prod.recurring.interval : null,
    });
  }

  const prod_card = plans.reverse().map((prod) => {
    return <ProductCard key={prod.id} name={prod.name} id={prod.id} price={prod.price} currency={prod.currency} interval={prod.interval} />
  })

  return (
    <div className="h-[90%] w-[80%] flex md:flex-row flex-col items-center md:justify-evenly">
      {prod_card}
    </div>
  );
};

export default ProductSection;
