import { Burger } from "./Burger/Burger";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import { Flex, FlexProps } from "@chakra-ui/react";
import { useUser } from "@supabase/auth-helpers-react";
import { useAuth } from "../../../../hooks/useAuth";
import { useState } from "react";

export const MobileNavigation = ({ ...restProps }: FlexProps) => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const { user } = useUser();
  const { handleSignOut } = useAuth();

  return (
    <Flex {...restProps}>
      <Burger
        mobileMenuIsOpen={mobileMenuIsOpen}
        setMobileMenuIsOpen={setMobileMenuIsOpen}
      />
      <MobileMenu
        user={user}
        handleSignOut={handleSignOut}
        mobileMenuIsOpen={mobileMenuIsOpen}
        setMobileMenuIsOpen={setMobileMenuIsOpen}
      />
    </Flex>
  );
};
