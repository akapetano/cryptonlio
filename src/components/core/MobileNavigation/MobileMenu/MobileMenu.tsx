import {
  Button,
  Flex,
  FlexProps,
  useColorModeValue,
  VStack,
  Avatar,
} from "@chakra-ui/react";
import { User } from "@supabase/supabase-js";
import { ColorModeButton } from "../../ColorModeButton/ColorModeButton";
import { NavLinks } from "../../NavLinks/NavLinks";
import NextLink from "next/link";

interface IMobileMenuProps extends FlexProps {
  isopen: boolean | undefined;
  user: User | null;
  handleSignOut: () => void;
  userAvatar: string;
}

export const MobileMenu = ({
  isopen,
  user,
  userAvatar,
  handleSignOut,
}: IMobileMenuProps) => {
  const overlayBgColor = useColorModeValue(
    "rgba(255,255,255,0.55)",
    "rgba(0,0,0,0.55)"
  );

  return (
    <Flex
      as="nav"
      flexDir="column"
      bg={overlayBgColor}
      boxShadow="0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"
      backdropFilter="blur( 20px )"
      pt="10rem"
      height="100vh"
      width="100%"
      textAlign="center"
      position="fixed"
      top="0"
      right="0"
      transform={isopen ? "translateX(0)" : "translateX(100%)"}
      transition="transform 0.3s ease-in-out"
      zIndex="20"
    >
      <VStack spacing={12} flexDir={!!user ? "column" : "column-reverse"}>
        {!user ? (
          <VStack spacing={6} mt={16}>
            <NextLink href="/sign-in" passHref>
              <Button variant="secondary" width="14rem">
                Sign in
              </Button>
            </NextLink>
            <NextLink href="/sign-up" passHref>
              <Button variant="primary" width="14rem">
                Get started
              </Button>
            </NextLink>
          </VStack>
        ) : (
          <Avatar size={"md"} src={userAvatar} />
        )}

        <ColorModeButton aria-label="Toggle color mode" />
        <NavLinks
          display={{ base: "flex", md: "none" }}
          direction="column"
          justifyContent="center"
          alignItems="center"
          isMobile={true}
          hasUser={!!user}
        />
        <Button aria-label="logout" onClick={() => handleSignOut()}>
          Logout
        </Button>
      </VStack>
    </Flex>
  );
};
