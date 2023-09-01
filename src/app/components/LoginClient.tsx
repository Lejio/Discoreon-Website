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
  CardHeader,
} from "@nextui-org/react";
import Bug from "@/assets/TypesSVG/Bug.svg";
import Image from "next/image";
import { Pokemon } from "@/types/PokemonTypes";

export default function LoginClient({
  pokemon,
  login_redirect,
}: {
  pokemon: Pokemon;
  login_redirect?: string;
}) {
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
      console.log(data);
    } else {
      // If the session is authenticated, then take them directly to the home page.
      router.push(`${SITE_URL}/${login_redirect}`);
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
                {/* <Card className="py-4">
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">Daily Mix</p>
                    <small className="text-default-500">12 Tracks</small>
                    <h4 className="font-bold text-large">Frontend Radio</h4>
                  </CardHeader>
                  <CardBody className="overflow-visible py-2 relative">
                    <Image
                      alt="Card background"
                      className="object-cover rounded-xl absolute"
                      src={pokemon!.versions!.at(0)!.data.images.discord_image}
                      width={270}
                      height={270}
                    />
                    <Image
                      alt="Card background"
                      className="object-cover rounded-xl"
                      src={Bug}
                      width={270}
                      height={270}
                    />
                  </CardBody>
                </Card> */}
                <Card>
                  <CardHeader>
                    <p>{String(pokemon.name)}</p>
                  </CardHeader>
                  <CardBody className=" text-center py-2">
                    <div className="relative flex flex-col items-center">
                      <Image
                        src={Bug}
                        alt="bug-type"
                        width={250}
                        height={250}
                        // className="absolute"
                      />
                      <Image
                        src={
                          pokemon!.versions!.at(0)!.data.images.discord_image
                        }
                        className="absolute"
                        alt={pokemon!.name}
                        width={250}
                        height={250}
                      />
                    </div>
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
