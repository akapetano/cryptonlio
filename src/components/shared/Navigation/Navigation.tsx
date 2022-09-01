import { useState } from "react";
import { HStack, useDisclosure, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { Logo } from "../../core/Logo/Logo";
import { UserMenu } from "../../core/UserMenu/UserMenu";
import { NavLinks } from "../../core/NavLinks/NavLinks";
import { NavigationWrapper } from "./NavigationWrapper/NavigationWrapper";
import { ColorModeButton } from "../../core/ColorModeButton/ColorModeButton";
import { MobileNavigation } from "../../core/MobileNavigation/MobileNavigation";
import { Session } from "@supabase/supabase-js";

interface INavigationProps {
  session: Session | null;
}

export const Navigation = ({ session }: INavigationProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <NavigationWrapper>
      <Logo width="75" height="75" />
      <NavLinks
        display={{ base: "none", md: "flex" }}
        direction={{ base: "column", md: "row" }}
      />
      <HStack spacing={4} display={{ base: "none", md: "flex" }}>
        <ColorModeButton aria-label="Toggle color mode" />
        {!isLoggedIn ? (
          <NextLink href="/sign-in" passHref>
            <Button variant="secondary">Sign in</Button>
          </NextLink>
        ) : null}
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <NextLink href="/sign-up" passHref>
            <Button variant="primary">Get started</Button>
          </NextLink>
        )}
      </HStack>
      <MobileNavigation
        session={session}
        display={{ base: "flex", md: "none" }}
      />
    </NavigationWrapper>
  );
};
