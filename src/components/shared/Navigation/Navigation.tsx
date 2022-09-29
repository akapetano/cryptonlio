import { HStack, useDisclosure, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { Logo } from "../../core/Logo/Logo";
import { UserMenu } from "../../core/UserMenu/UserMenu";
import { NavLinks } from "../../core/NavLinks/NavLinks";
import { NavigationWrapper } from "./NavigationWrapper/NavigationWrapper";
import { ColorModeButton } from "../../core/ColorModeButton/ColorModeButton";
import { MobileNavigation } from "../../core/MobileNavigation/MobileNavigation";
import { Session, User } from "@supabase/supabase-js";

interface INavigationProps {
  user: User | null;
  session: Session | null;
  onSignOut: () => void;
}

export const Navigation = ({ session, user, onSignOut }: INavigationProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <NavigationWrapper>
      <Logo width="75" height="75" />
      <NavLinks
        display={{ base: "none", md: "flex" }}
        direction={{ base: "column", md: "row" }}
      />
      <HStack spacing={4} display={{ base: "none", md: "flex" }}>
        <ColorModeButton aria-label="Toggle color mode" />
        {!user ? (
          <NextLink href="/sign-in" passHref>
            <Button variant="secondary">Sign in</Button>
          </NextLink>
        ) : null}
        {user ? (
          <UserMenu user={user} onSignOut={onSignOut} />
        ) : (
          <NextLink href="/sign-up" passHref>
            <Button variant="primary">Get started</Button>
          </NextLink>
        )}
      </HStack>
      <MobileNavigation
        session={session}
        display={{ base: "flex", md: "none" }}
        onSignOut={onSignOut}
      />
    </NavigationWrapper>
  );
};
