"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import MotionButton from "@/app/components/MotionButton";
import { SITE_URL } from "@/utils/globals";

export default function LoginButton() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const loginHandler = async () => {
    // Creates a session object to retrieve the state of the session.
    const session = await supabase.auth.getSession();

    // If the session is null, that means the user is not logged in, therefore redirect them to discord oauth.
    if (!session.data.session) {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "discord",
        options: {
          redirectTo: `${SITE_URL}/api/auth`,
        },
      });
    } else {
      // If the session is authenticated, then take them directly to the home page.
      router.push(`${SITE_URL}/home`);
    }
  };

  return (
    <MotionButton
      clickHandler={loginHandler}
      text="Login"
      height={50}
      width={100}
      textClassName="text-lg text-light-primary"
    />
    // <button
    //   onClick={loginHandler}
    //   className="w-auto h-auto cursor-pointer md:block"
    // >
    //   <motion.div whileHover="hover" initial="default" animate="default">
    //     <motion.p className=" text-center absolute pt-3 pl-7 text-lg text-light-primary">
    //       Login
    //     </motion.p>
    //     <motion.svg width={100} height={50} viewBox="0 0 100 50">
    //       <motion.path
    //         variants={outlineVariants}
    //         strokeWidth="5"
    //         fill="none"
    //         stroke="grey"
    //         d="M5,25
    //         A20,20 0 0 1 25,5
    //         L75,5
    //         A20,20 0 0 1 95,30
    //         L95,30
    //         A20,20 0 0 1 75,45
    //         L25,45
    //         A20,20 0 0 1 5,24"
    //       />
    //     </motion.svg>
    //   </motion.div>
    // </button>
  );
}
