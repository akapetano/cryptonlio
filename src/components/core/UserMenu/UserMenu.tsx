import {
  Menu,
  MenuList,
  MenuItem,
  Text,
  Button,
  MenuButton,
  Center,
  MenuDivider,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import { useUser } from "@supabase/auth-helpers-react";
import { useAuth } from "../../../../hooks/useAuth";

export const UserMenu = () => {
  const menuItemHoverBgColor = useColorModeValue("brand.300", "brand.700");
  const { user } = useUser();
  const { handleSignOut } = useAuth();

  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={"full"}
        variant={"link"}
        cursor={"pointer"}
        minW={0}
        m={0}
      >
        <UserAvatar width={48} height={48} />
      </MenuButton>
      <MenuList alignItems={"center"} m={0}>
        <br />
        <Center>
          <UserAvatar width={128} height={128} />
        </Center>
        <br />
        <Center>
          <Text
            m={0}
          >{`${user?.user_metadata?.firstName} ${user?.user_metadata?.lastName}`}</Text>
        </Center>
        <br />
        <MenuDivider m={0} />
        <Flex flexDir="column" m={0}>
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
