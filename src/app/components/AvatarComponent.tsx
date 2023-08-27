import React from "react";
import {
  User,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
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
  label: string;
};

export default function AvatarComponent({
  user_metadata,
}: {
  user_metadata: UserMetadata;
}) {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const avatarItems: Array<LinkItem> = [
    { href: "/profile", label: "Profile" },
    { href: "/settings", label: "Settings" },
  ];

  const avatarComponents = avatarItems.map((link: LinkItem, index: number) => {
    return (
      <DropdownItem key={index}>
        <Link href={link.href}>{link.label}</Link>
      </DropdownItem>
    );
    }

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
      <DropdownMenu>
        {avatarComponents}
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

// const AvatarComponent = ({
//   user_metadata,
// }: {
//   user_metadata: UserMetadata;
// }) => {
//   const supabase = createClientComponentClient();
//   const router = useRouter();

// const avatarItems: Array<LinkItem> = [
//   { href: "/profile", label: "Profile" },
//   { href: "/settings", label: "Settings" },
// ];

// const avatarComponents = avatarItems.map((link: LinkItem, index: number) => {
//   return (
//     <DropdownItem key={index}>
//       <Link href={link.href}>{link.label}</Link>
//     </DropdownItem>
//   );
// });

//   const logout = async () => {
//     console.log("clicked");
//     const { error } = await supabase.auth.signOut();
//     console.log(error);
//     router.refresh();
//   };

//   return (
//     <Dropdown>
//       <DropdownTrigger className=" hover:cursor-pointer">
//         <Button variant="bordered" className=" py-6">
//           <User
//             name={user_metadata.custom_claims.global_name}
//             description={user_metadata.full_name}
//             avatarProps={{
//               src: `${user_metadata.picture}`,
//             }}
//           />
//           {/* <Avatar src={`${user_metadata.picture}`} size="lg" /> */}
//         </Button>
//       </DropdownTrigger>
//       <DropdownMenu>
//         {navItemComponents}
//         <DropdownItem
//           onClick={logout}
//           className=" text-danger-400"
//           color="danger"
//         >
//           Logout
//         </DropdownItem>
//       </DropdownMenu>
//     </Dropdown>
//   );
// };

// export default AvatarComponent;
