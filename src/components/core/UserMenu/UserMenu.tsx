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
import NextLink from "next/link";
import NextImage from "next/image";
import { useUser } from "@supabase/auth-helpers-react";
import { useAuth } from "../../../../hooks/useAuth";

export const UserMenu = () => {
  const menuItemHoverBgColor = useColorModeValue("brand.300", "brand.700");
  const { user } = useUser();
  const { handleSignOut, userAvatar } = useAuth();

  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={"full"}
        variant={"link"}
        cursor={"pointer"}
        minW={0}
      >
        <Avatar size={"md"} src={userAvatar} />
      </MenuButton>
      <MenuList alignItems={"center"} m="0">
        <br />
        <Center>
          <Avatar size={"2xl"} src={userAvatar} />
        </Center>
        <br />
        <Center>
          <Text>{`${user?.user_metadata?.firstName} ${user?.user_metadata?.lastName}`}</Text>
        </Center>
        <br />
        <MenuDivider m={0} />
        <Flex flexDir="column">
          <NextLink href="/portfolio" passHref>
            <MenuItem _hover={{ bgColor: menuItemHoverBgColor, color: "#fff" }}>
              Your Portfolio
            </MenuItem>
          </NextLink>
          <NextLink href="/settings" passHref>
            <MenuItem _hover={{ bgColor: menuItemHoverBgColor, color: "#fff" }}>
              Account Settings
            </MenuItem>
          </NextLink>
          <MenuItem
            _hover={{ bgColor: menuItemHoverBgColor, color: "#fff" }}
            onClick={() => handleSignOut()}
          >
            Logout
          </MenuItem>
        </Flex>
      </MenuList>
    </Menu>
  );
};
