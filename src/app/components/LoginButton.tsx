"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import MotionButton from "@/app/components/MotionButton";
import { SITE_URL } from "@/utils/globals";
import { BsDiscord } from "react-icons/bs";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Checkbox,
  Link,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function LoginButton() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
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
      router.push(`${SITE_URL}/`);
    }
  };

  return (
    <>
      <MotionButton
        clickHandler={onOpen}
        text="Login"
        height={50}
        width={100}
        textClassName="text-lg text-light-primary"
      />
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        size="md"
      >
        <ModalContent className="justify-center">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Begin your adventure!
              </ModalHeader>
              <div className=" bg-dark-primary h-52"></div>
              <ModalBody>
                <p>Login or Sign up today using your discord account.</p>\{" "}
                <Button onClick={loginHandler} className="">
                  <BsDiscord size={30} style={{ fill: "#5562EB" }} />
                </Button>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
