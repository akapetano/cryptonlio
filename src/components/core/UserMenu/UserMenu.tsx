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
  Flex,
} from "@chakra-ui/react";
import { User } from "@supabase/supabase-js";

interface IUserMenuProps {
  onSignOut: () => void;
  user: User;
}

export const UserMenu = ({ onSignOut, user }: IUserMenuProps) => {
  const menuItemHoverBgColor = useColorModeValue("brand.300", "brand.700");
  console.log(
    `https://avatars.dicebear.com/api/${user?.user_metadata?.selectAvatar}/${user?.user_metadata?.favoriteCrypto}.svg`
  );
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
          src={`https://avatars.dicebear.com/api/${user?.user_metadata?.selectAvatar}/${user?.user_metadata?.favoriteCrypto}.svg`}
        />
      </MenuButton>
      <MenuList alignItems={"center"} m="0">
        <br />
        <Center>
          <Avatar
            size={"2xl"}
            src={`https://avatars.dicebear.com/api/${user?.user_metadata?.selectAvatar}/${user?.user_metadata?.favoriteCrypto}.svg`}
          />
        </Center>
        <br />
        <Center>
          <Text>{`${user?.user_metadata?.firstName} ${user?.user_metadata?.lastName}`}</Text>
        </Center>
        <br />
        <MenuDivider m={0} />
        <Flex flexDir="column">
          <MenuItem _hover={{ bgColor: menuItemHoverBgColor, color: "#fff" }}>
            Your Portfolio
          </MenuItem>
          <MenuItem _hover={{ bgColor: menuItemHoverBgColor, color: "#fff" }}>
            Account Settings
          </MenuItem>
          <MenuItem
            _hover={{ bgColor: menuItemHoverBgColor, color: "#fff" }}
            onClick={() => onSignOut()}
          >
            Logout
          </MenuItem>
        </Flex>
      </MenuList>
    </Menu>
  );
};
