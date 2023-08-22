import React from "react";
import {
  User,
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Divider,
} from "@nextui-org/react";
import { UserMetadata } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const AvatarComponent = ({
  user_metadata,
}: {
  user_metadata: UserMetadata;
}) => {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const logout = async () => {
    console.log("clicked");
    const { error } = await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <Dropdown>
      <DropdownTrigger className=" hover:cursor-pointer">
        <Button variant="bordered" className=" py-6">
          <User
            name={user_metadata.custom_claims.global_name}
            description={user_metadata.full_name}
            avatarProps={{
              src: `${user_metadata.picture}`,
            }}
          />
          {/* <Avatar src={`${user_metadata.picture}`} size="lg" /> */}
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem>Bruh 1</DropdownItem>
        <DropdownItem>Bruh 2</DropdownItem>
        <DropdownItem>Bruh 3</DropdownItem>
        <DropdownItem
          onClick={logout}
          className=" text-danger-400"
          color="danger"
        >
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default AvatarComponent;
