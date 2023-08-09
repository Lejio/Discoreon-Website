"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import MotionButton from "@/app/components/MotionButton";
import { SITE_URL } from "@/utils/globals";

// LogoutButton Component --> A wrapper for a MotionButton that signs a user out when clicked.
export default function LoginButton() {
  const supabase = createClientComponentClient();

  // NextJS router hook.
  const router = useRouter();

  // Async MotionButton onClick handler.
  const logoutHandler = async () => {
    // Signs the current user out.
    const { error } = await supabase.auth.signOut();

    // Redirects the user to the main menu
    router.push(`${SITE_URL}/`);
  };

  return (
    <MotionButton
      clickHandler={logoutHandler}
      text="Logout"
      height={50}
      width={100}
      textClassName="text-lg text-light-primary"
    />
  );
}
