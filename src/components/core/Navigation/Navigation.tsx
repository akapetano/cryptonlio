import { useState } from 'react';
import { HStack, useDisclosure, Button, Box, Link } from '@chakra-ui/react';
import { Logo } from '../Logo/Logo';
import { UserMenu } from '../UserMenu/UserMenu';
import { NavLinks } from '../NavLinks/NavLinks';
import { NavigationWrapper } from '../NavigationWrapper/NavigationWrapper';
import { ColorModeButton } from '../ColorModeButton/ColorModeButton';
import { NAV_ITEMS } from '../../../../constants/constants';
import NextLink from 'next/link';

export const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <NavigationWrapper>
      <Logo />
      <HStack as={'nav'} display={{ base: 'none', md: 'flex' }}>
        {NAV_ITEMS.map((navItem) => {
          const navItemPath = `/${navItem.replace(/\s+/g, '-').toLowerCase()}`;
          <Link
            rounded={'md'}
            color="black"
            fontWeight="600"
            transition="all .3s ease-in-out"
            fontSize="sm"
            textTransform="uppercase"
            href={navItemPath}
          >
            Link
          </Link>;
        })}
      </HStack>
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
