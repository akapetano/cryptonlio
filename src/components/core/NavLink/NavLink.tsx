import {
  Link as ChakraLink,
  LinkProps,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

interface INavLinkProps extends LinkProps {
  to: string;
  linkName: string;
  isMobile?: boolean;
  onClick?: () => void;
}

export const NavLink = ({
  to,
  linkName,
  onClick,
  ...restProps
}: INavLinkProps) => {
  const router = useRouter();
  const isActive = router.pathname === to && linkName !== "Logout";
  const chakraLinkBg = useColorModeValue("brand.300", "brand.200");
  const chakraLinkActiveBg = useColorModeValue("brand.400", "brand.200");
  const chakraLinkColor = useColorModeValue("brand.200", "brand.100");
  const chakraActiveLinkColor = useColorModeValue("white", "gray.800");
  const chakraLinkColorHover = useColorModeValue("white", "gray.800");

  return isActive ? (
    <NextLink href={to} passHref>
      <ChakraLink
        color={chakraActiveLinkColor}
        rounded="md"
        fontWeight="600"
        bg={chakraLinkBg}
        fontSize="sm"
        textTransform="uppercase"
        p="0.7rem"
        _hover={{ bg: chakraLinkActiveBg }}
        _active={{ bg: chakraLinkActiveBg }}
        onClick={onClick}
        {...restProps}
      >
        {linkName}
      </ChakraLink>
    </NextLink>
  ) : (
    <NextLink href={to} passHref>
      <ChakraLink
        color={chakraLinkColor}
        rounded={"md"}
        fontWeight="600"
        transition="color .3s ease-in, background-color .3s ease-in"
        fontSize="sm"
        textTransform="uppercase"
        p="0.7rem"
        onClick={onClick}
        _hover={{
          color: chakraLinkColorHover,
          bg: chakraLinkBg,
          transition: "color .3s ease-out, background-color .3s ease-out",
        }}
        _active={{ bg: chakraLinkActiveBg }}
        {...restProps}
      >
        {linkName}
      </ChakraLink>
    </NextLink>
  );
};
