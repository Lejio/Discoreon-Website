"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import MotionButton from "../../components/MotionButton";
import { SITE_URL } from "@/utils/globals";

interface ProductProps {
  name: string;
  id: string;
  price: number;
  currency: string;
  interval: string | null;
}

const ProductCard = ({ name, id, price, currency, interval }: ProductProps) => {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const text = interval ? "Annual" : "Lifetime";

  const productCardVariant = {
    hidden: {
      y: 150,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 100,
      transition: {
        duration: 1,
      },
    },
  };

  const checkout = async () => {
    const session = await supabase.auth.getSession();

    if (session.data.session) {
      const type = text.toLowerCase();
      const response = await fetch(`${SITE_URL}/api/checkout/${type}/${id}`);
      const res_data = await response.json();
      router.push(res_data.checkout_url);
    } else {
      // If the session is authenticated, then take them directly to the home page.
      router.push(`${SITE_URL}/start/premium`);
    }
  };

  return (
    <motion.div
      variants={productCardVariant}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.2 }}
      className=" bg-dark-primary md:w-[30%] h-[100%] w-[60%] md:my-0 my-[5%] p-[5%] rounded-xl flex flex-col justify-evenly items-center"
    >
      <h2 className=" font-medium text-light-primary md:text-5xl md:cursor-default hover:text-[#D3D3D3] duration-300">
        {text}
      </h2>
      <div className="flex flex-col items-center justify-center md:cursor-default">
        <h3 className="text-white md:text-5xl text-2xl">${price}</h3>
        <small className="text-gray md:text-2xl hover:text-[#D3D3D3] duration-500">
          {interval ? `/${interval}` : `one-time`}
        </small>
      </div>
      <MotionButton
        clickHandler={checkout}
        text={interval ? "Subscribe" : "Purchase"}
        width={130}
        height={65}
        textClassName="text-lg text-light-primary hover:text-[#D3D3D3] duration-300"
      />
    </motion.div>
  );
};

export default ProductCard;
