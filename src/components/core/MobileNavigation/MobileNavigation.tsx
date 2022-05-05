import { Burger } from './Burger/Burger';
import { MobileMenu } from './MobileMenu/MobileMenu';
import { Flex, FlexProps } from '@chakra-ui/react';
import { useState } from 'react';

interface IMobileNavigation extends FlexProps {
  isLoggedIn: boolean;
}

export const MobileNavigation = ({
  isLoggedIn,
  ...restProps
}: IMobileNavigation) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex {...restProps}>
      <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
      <MobileMenu isLoggedIn={isLoggedIn} isOpen={isOpen} />
    </Flex>
  );
};
