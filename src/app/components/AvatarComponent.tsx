"use client";
import React from "react";
import {
  User,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownItemProps,
  Button,
} from "@nextui-org/react";
import { UserMetadata } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import NavItem from "./NavItem";
import { NavItemType } from "@/types/types";

type LinkItem = {
  href: string;
  key: string;
  color: string;
  onPress: (() => void) | undefined;
};

export default function AvatarComponent({
  user_metadata,
}: {
  user_metadata: UserMetadata;
}) {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    console.log(error);
    router.refresh();
  };

  const avatarItems: Array<LinkItem> = [
    {
      href: "/profile",
      key: "Profile",
      color: "default",
      onPress: () => {
        router.push("/profile");
      },
    },
    {
      href: "/settings",
      key: "Settings",
      color: "default",
      onPress: () => {
        router.push("/settings");
      },
    },
    {
      href: "#",
      key: "Logout",
      color: "danger",
      onPress: logout,
    },
  ];

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
      <DropdownMenu aria-label="Dynamic Actions" items={avatarItems}>
        {(items: DropdownItemProps<LinkItem>) => (
          <DropdownItem
            onPress={items.onPress}
            key={items.key}
            color={items.color}
            className={
              items.key === "Logout" ? " text-danger-500" : " text-default-500"
            }
          >
            {items.key}
          </DropdownItem>
        )}
      </DropdownMenu>
      <DropdownMenu>
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
}
