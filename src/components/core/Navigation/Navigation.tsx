import { useState } from 'react';
import { HStack, useDisclosure, Button } from '@chakra-ui/react';
import { Logo } from '../Logo/Logo';
import { UserMenu } from '../UserMenu/UserMenu';
import { NavLinks } from '../NavLinks/NavLinks';
import { NavigationWrapper } from '../NavigationWrapper/NavigationWrapper';
import { ColorModeButton } from '../ColorModeButton/ColorModeButton';

export const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <NavigationWrapper>
      <Logo />
      <NavLinks />
      <HStack spacing={2}>
        <ColorModeButton />
        {!isLoggedIn ? <Button variant="secondary">Sign in</Button> : null}
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <Button variant="primary">Get started</Button>
        )}
      </HStack>
    </NavigationWrapper>
  );
};
