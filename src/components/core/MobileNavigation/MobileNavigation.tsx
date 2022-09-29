import { Burger } from "./Burger/Burger";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import { Flex, FlexProps } from "@chakra-ui/react";
import { useState } from "react";
import { User } from "@supabase/supabase-js";

interface IMobileNavigation extends FlexProps {
  user: User | null;
  onSignOut: () => void;
}

export const MobileNavigation = ({
  user,
  onSignOut,
  ...restProps
}: IMobileNavigation) => {
  const [isopen, setIsopen] = useState(false);

  return (
    <Flex {...restProps}>
      <Burger isopen={isopen ? isopen : undefined} setIsopen={setIsopen} />
      <MobileMenu user={user} isOpen={isopen} onSignOut={onSignOut} />
    </Flex>
  );
};
