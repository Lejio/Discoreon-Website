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
  Card,
  CardBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Prisma } from "@prisma/client";
import Image from "next/image";
import { Pokemon } from "@/types/PokemonTypes";

export default function LoginClient({ pokemon }: { pokemon: Pokemon }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const supabase = createClientComponentClient();
  const router = useRouter();

  console.log(pokemon.versions);

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
              <ModalBody className=" py-6">
                <Card>
                  <CardBody className=" flex justify-center text-center">
                    <p>{String(pokemon.name)}</p>
                    <Image
                      src={pokemon!.versions!.at(0)!.data.images.discord_image}
                      alt={pokemon!.name}
                      width={100}
                      height={100}
                    />
                  </CardBody>
                </Card>
                {/* <div className=" bg-dark-primary h-52"></div> */}
                <p>Login or Sign up today using your discord account.</p>
                <Button onClick={loginHandler}>
                  <BsDiscord size={30} style={{ fill: "#5562EB" }} />
                </Button>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
