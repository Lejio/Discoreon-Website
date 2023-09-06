"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import MotionButton from "@/app/components/MotionButton";
import { SITE_URL } from "@/utils/globals";
import { BsDiscord } from "react-icons/bs";
import { TypesImage } from "@/types/ImagePointers";
import { Jost } from "next/font/google";
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
// import Bug from "@/assets/TypesSVG/Bug.svg";
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

  const typeOfGeneratedPokemon: string = pokemon!
    .versions!.at(0)
    ?.data!.pokedex_data!.Type!.at(0)
    ?.toString()!;

  console.log(typeOfGeneratedPokemon);

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
              <ModalBody className=" pb-6 pt-0">
                <Card>
                  <CardHeader className="justify-center">
                    <p>{String(pokemon.name)}</p>
                  </CardHeader>
                  <CardBody className=" text-center py-2">
                    <div className="relative flex flex-col items-center m-[5%]">
                      <Image
                        src={TypesImage[typeOfGeneratedPokemon]}
                        alt={`${typeOfGeneratedPokemon.toLowerCase()}-icon`}
                        width={250}
                        height={250}
                        className=" opacity-70"
                      />
                      <Image
                        src={
                          pokemon!.versions!.at(0)!.data.images.discord_image
                        }
                        className="absolute bottom-4"
                        alt={pokemon!.name}
                        width={200}
                        height={200}
                      />
                    </div>
                  </CardBody>
                </Card>
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
