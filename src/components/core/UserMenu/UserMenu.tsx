import {
  Menu,
  MenuList,
  MenuItem,
  Text,
  Button,
  MenuButton,
  Avatar,
  Center,
  MenuDivider,
  useColorModeValue,
} from "@chakra-ui/react";
import { User } from "@supabase/supabase-js";

interface IUserMenuProps {
  onSignOut: () => void;
  user: User;
}

export const UserMenu = ({ onSignOut, user }: IUserMenuProps) => {
  const menuItemHoverBgColor = useColorModeValue("brand.300", "brand.700");

  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={"full"}
        variant={"link"}
        cursor={"pointer"}
        minW={0}
      >
        <Avatar
          size={"md"}
          src={"https://avatars.dicebear.com/api/male/username.svg"}
        />
      </MenuButton>
      <MenuList alignItems={"center"}>
        <br />
        <Center>
          <Avatar
            size={"2xl"}
            src={"https://avatars.dicebear.com/api/male/username.svg"}
          />
        </Center>
        <br />
        <Center>
          <Text>{`${user?.user_metadata?.firstName} ${user?.user_metadata?.lastName}`}</Text>
        </Center>
        <br />
        <MenuDivider />
        <MenuItem _hover={{ bgColor: menuItemHoverBgColor, color: "#fff" }}>
          Your Portfolio
        </MenuItem>
        <MenuItem _hover={{ bgColor: menuItemHoverBgColor, color: "#fff" }}>
          Account Settings
        </MenuItem>
        <MenuItem
          p="0"
          bg="none"
          borderRadius="none"
          _hover={{ bgColor: menuItemHoverBgColor, color: "#fff" }}
          as={Button}
          onClick={() => onSignOut()}
        >
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
