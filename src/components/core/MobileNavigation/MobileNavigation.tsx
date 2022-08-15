import { Burger } from "./Burger/Burger";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import { Flex, FlexProps } from "@chakra-ui/react";
import { useState } from "react";
import { Session } from "@supabase/supabase-js";

interface IMobileNavigation extends FlexProps {
  session: Session | null;
}

export const MobileNavigation = ({
  session,
  ...restProps
}: IMobileNavigation) => {
  const [isopen, setIsopen] = useState(false);

  return (
    <Flex {...restProps}>
      <Burger isopen={isopen ? isopen : undefined} setIsopen={setIsopen} />
      <MobileMenu session={session} isOpen={isopen} />
    </Flex>
  );
};
