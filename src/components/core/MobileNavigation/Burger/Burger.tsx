import { Button, ButtonProps } from '@chakra-ui/react';
import { BurgerLine } from './BurgerLine/BurgerLine';

interface IBurgerProps extends ButtonProps {
  isOpen: boolean;
  setIsOpen: (param: boolean) => void;
}

export const Burger = ({ isOpen, setIsOpen, ...restProps }: IBurgerProps) => {
  return (
    <Button
      isOpen={isOpen}
      onClick={() => setIsOpen(!isOpen)}
      position="fixed"
      top="1.5rem"
      right="1.5rem"
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
      _hover={{ background: 'transparent' }}
      _active={{ background: 'transparent' }}
      _focus={{ outline: 'none' }}
      {...restProps}
    >
      <BurgerLine isOpen={isOpen} />
      <BurgerLine isOpen={isOpen} />
      <BurgerLine isOpen={isOpen} />
    </Button>
  );
};
