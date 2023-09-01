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
};

export default function AvatarComponent({
  user_metadata,
}: {
  user_metadata: UserMetadata;
}) {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const avatarItems: Array<LinkItem> = [
    { href: "/profile", key: "Profile" },
    { href: "/settings", key: "Settings" },
  ];

  // const avatarComponents = avatarItems.map((link: LinkItem, index: number) => {
  //   return (
  //     <DropdownItem key={index}>
  //       <Link href={link.href}>{link.label}</Link>
  //     </DropdownItem>
  //   );
  // });

  const logout = async () => {
    console.log("clicked");
    const { error } = await supabase.auth.signOut();
    console.log(error);
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
      <DropdownMenu aria-label="Dynamic Actions" items={avatarItems}>
        {(items: DropdownItemProps<LinkItem>) => (
          <DropdownItem
            key={items.key}
            color={items.key === "delete" ? "danger" : "default"}
            className={items.key === "delete" ? "text-danger" : ""}
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

// import React from "react";
// import {
//   Dropdown,
//   DropdownTrigger,
//   DropdownMenu,
//   DropdownItem,
//   Button,
//   DropdownItemProps,
// } from "@nextui-org/react";
// import { UserMetadata } from "@supabase/supabase-js";

// export default function App({
//   user_metadata,
// }: {
//   user_metadata: UserMetadata;
// }) {
//   const items: Array<LinkItem> = [
//     {
//       key: "new",
//       label: "New file",
//     },
//     {
//       key: "copy",
//       label: "Copy link",
//     },
//     {
//       key: "edit",
//       label: "Edit file",
//     },
//     {
//       key: "delete",
//       label: "Delete file",
//     },
//   ];

//   return (
//     <Dropdown>
//       <DropdownTrigger>
//         <Button variant="bordered">Open Menu</Button>
//       </DropdownTrigger>
//       <DropdownMenu aria-label="Dynamic Actions" items={items}>
//         {(items: DropdownItemProps<LinkItem>) => (
//           <DropdownItem
//             key={items.key}
//             color={items.key === "delete" ? "danger" : "default"}
//             className={items.key === "delete" ? "text-danger" : ""}
//           >
//             {items.key}
//           </DropdownItem>
//         )}
//       </DropdownMenu>
//     </Dropdown>
//   );
// }
