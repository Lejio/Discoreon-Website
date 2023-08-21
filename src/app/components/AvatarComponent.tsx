import React from 'react'
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
import { UserMetadata } from '@supabase/supabase-js'

const AvatarComponent = ( { user_metadata }: {
    user_metadata: UserMetadata
} ) => {
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
        <DropdownItem>Bruh 4</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default AvatarComponent
