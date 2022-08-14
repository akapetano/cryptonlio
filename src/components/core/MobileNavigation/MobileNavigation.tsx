import { Burger } from "./Burger/Burger";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import { Flex, FlexProps } from "@chakra-ui/react";
import { useState } from "react";

interface IMobileNavigation extends FlexProps {
  isLoggedIn: boolean;
}

export const MobileNavigation = ({
  isLoggedIn,
  ...restProps
}: IMobileNavigation) => {
  const [isopen, setIsopen] = useState(false);

  return (
    <Flex {...restProps}>
      <Burger isopen={isopen ? isopen : undefined} setIsopen={setIsopen} />
      <MobileMenu isLoggedIn={isLoggedIn} isOpen={isopen} />
    </Flex>
  );
};
