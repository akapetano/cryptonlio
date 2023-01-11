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
  Icon,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import { useUser } from "@supabase/auth-helpers-react";
import { useAuth } from "../../../../hooks/useAuth";
import { FaDollarSign, FaSignOutAlt, FaCogs } from "react-icons/fa";
import { useRouter } from "next/router";

export const UserMenu = () => {
  const menuItemHoverBgColor = useColorModeValue("brand.300", "brand.200");
  const { user } = useUser();
  const { handleSignOut } = useAuth();
  const { route } = useRouter();

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
      <MenuList
        alignItems={"center"}
        m={0}
        p={0}
        outline={0}
        borderWidth={0}
        boxShadow="md"
      >
        <Center mb={"1rem"}>
          <UserAvatar width={128} height={128} />
        </Center>

        <Center mb={"1rem"}>
          <Text
            m={0}
          >{`${user?.user_metadata?.firstName} ${user?.user_metadata?.lastName}`}</Text>
        </Center>

        <MenuDivider m={0} />
        <Flex flexDir="column" m={0}>
          <NextLink href="/portfolios" passHref>
            <MenuItem
              display="flex"
              p="0.7rem"
              gap="0.5rem"
              _hover={{ bgColor: menuItemHoverBgColor, color: "#fff" }}
              bgColor={route === "/portfolios" ? menuItemHoverBgColor : ""}
              color={route === "/portfolios" ? "#fff" : ""}
            >
              <Icon as={FaDollarSign} w={4} h={4} />
              <span>My Portfolios</span>
            </MenuItem>
          </NextLink>
          <NextLink href="/settings" passHref>
            <MenuItem
              display="flex"
              p="0.7rem"
              gap="0.5rem"
              _hover={{ bgColor: menuItemHoverBgColor, color: "#fff" }}
              bgColor={route === "/settings" ? menuItemHoverBgColor : ""}
              color={route === "/settings" ? "#fff" : ""}
            >
              <Icon as={FaCogs} w={4} h={4} />
              <span>Account Settings</span>
            </MenuItem>
          </NextLink>
          <MenuItem
            display="flex"
            p="0.7rem"
            gap="0.5rem"
            _hover={{ bgColor: menuItemHoverBgColor, color: "#fff" }}
            onClick={() => handleSignOut()}
            roundedBottom="md"
          >
            <Icon as={FaSignOutAlt} w={4} h={4} />
            <span>Logout</span>
          </MenuItem>
        </Flex>
      </MenuList>
    </Menu>
  );
};
