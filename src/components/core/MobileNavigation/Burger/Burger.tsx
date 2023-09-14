import { Button, ButtonProps } from "@chakra-ui/react";
import { BurgerLine } from "./BurgerLine/BurgerLine";

interface IBurgerProps extends ButtonProps {
  mobileMenuIsOpen: boolean;
  setMobileMenuIsOpen: (isopen: boolean) => void;
}

export const Burger = ({
  mobileMenuIsOpen,
  setMobileMenuIsOpen,
}: IBurgerProps) => {
  return (
    <Button
      onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
      position="fixed"
      top="1rem"
      right="1rem"
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      width="2rem"
      height="2rem"
      background="transparent"
      border="none"
      cursor="pointer"
      padding="0"
      zIndex="25"
      _hover={{ background: "transparent" }}
      _active={{ background: "transparent" }}
      _focus={{ outline: "none" }}
    >
      <BurgerLine mobileMenuIsOpen={mobileMenuIsOpen} />
      <BurgerLine mobileMenuIsOpen={mobileMenuIsOpen} />
      <BurgerLine mobileMenuIsOpen={mobileMenuIsOpen} />
    </Button>
  );
};
