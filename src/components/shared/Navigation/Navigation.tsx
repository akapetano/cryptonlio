import { Flex, useDisclosure, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { Logo } from "../../core/Logo/Logo";
import { UserMenu } from "../../core/UserMenu/UserMenu";
import { NavLinks } from "../../core/NavLinks/NavLinks";
import { NavigationWrapper } from "./NavigationWrapper/NavigationWrapper";
import { ColorModeButton } from "../../core/ColorModeButton/ColorModeButton";
import { MobileNavigation } from "../../core/MobileNavigation/MobileNavigation";
import { User } from "@supabase/supabase-js";

interface INavigationProps {
  user: User | null;
}

export const Navigation = ({ user }: INavigationProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <NavigationWrapper>
      <Logo width="75" height="75" />
      <NavLinks
        display={{ base: "none", md: "flex" }}
        direction={{ base: "column", md: "row" }}
      />
      <Flex gap={4} display={{ base: "none", md: "flex" }}>
        <ColorModeButton aria-label="Toggle color mode" />
        {!user ? (
          <NextLink href="/sign-in" passHref>
            <Button variant="secondary">Sign in</Button>
          </NextLink>
        ) : null}
        {user ? (
          <UserMenu />
        ) : (
          <NextLink href="/sign-up" passHref>
            <Button variant="primary">Get started</Button>
          </NextLink>
        )}
      </Flex>
      <MobileNavigation display={{ base: "flex", md: "none" }} />
    </NavigationWrapper>
  );
};
