import { useState } from 'react';
import {
  Flex,
  HStack,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  IconButton,
  Button,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Logo } from '../Logo/Logo';
import { NavLink } from '../NavLink/NavLink';
import { UserMenu } from '../UserMenu/UserMenu';

const Links = ['Home', 'Dashboard', 'Cryotocurrencies', 'Create a Portfolio'];

function MainNav() {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(SunIcon, MoonIcon);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Flex
      h={28}
      alignItems={'center'}
      justifyContent={'space-around'}
      bg={useColorModeValue('white', 'gray.800')}
      height="6rem"
      boxShadow={useColorModeValue(
        '0 1px 6px -1px rgba(0, 0, 0, .2)',
        '0 1px 6px 1px rgba(0, 0, 0, .3)'
      )}
      width="100%"
    >
      <Logo />

      <HStack as={'nav'} spacing={8} display={{ base: 'none', md: 'flex' }}>
        {Links.map((link) => (
          <NavLink key={link}>{link}</NavLink>
        ))}
      </HStack>

      <HStack spacing={2}>
        <IconButton
          aria-label="Toggle light dark mode"
          onClick={toggleColorMode}
          icon={<SwitchIcon />}
          _hover={{ color: useColorModeValue('brand.600', 'brand.50') }}
          rounded="full"
          size="md"
        />
        {!isLoggedIn ? <Button variant="secondary">Sign in</Button> : null}
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <Button variant="primary">Get started</Button>
        )}
      </HStack>
    </Flex>
  );
}

export { MainNav };
