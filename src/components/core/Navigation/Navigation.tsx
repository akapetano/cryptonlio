import { useState } from 'react';
import { HStack, useDisclosure, Button } from '@chakra-ui/react';
import { Logo } from '../Logo/Logo';
import { UserMenu } from '../UserMenu/UserMenu';
import { NavLinks } from '../NavLinks/NavLinks';
import { NavigationWrapper } from '../NavigationWrapper/NavigationWrapper';
import { ColorModeButton } from '../ColorModeButton/ColorModeButton';
import { MobileNavigation } from '../MobileNavigation/MobileNavigation';

export const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <NavigationWrapper>
      <Logo width="75" height="75" />
      <NavLinks
        display={{ base: 'none', md: 'flex' }}
        direction={{ base: 'column', md: 'row' }}
      />
      <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
        <ColorModeButton aria-label="Toggle color mode" />
        {!isLoggedIn ? <Button variant="secondary">Sign in</Button> : null}
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <Button variant="primary">Get started</Button>
        )}
      </HStack>
      <MobileNavigation
        isLoggedIn={isLoggedIn}
        display={{ base: 'flex', md: 'none' }}
      />
    </NavigationWrapper>
  );
};
