import {
  Box,
  Flex,
  HStack,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  IconButton,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Logo } from '../../Logo/Logo';
import { NavLink } from '../NavLink/NavLink';
import { UserMenu } from '../UserMenu/UserMenu';

const Links = ['Home', 'Cryotocurrencies', 'Create a Portfolio'];

function MainNav() {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(SunIcon, MoonIcon);
  const { isOpen, onOpen, onClose } = useDisclosure();
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

      <Flex>
        <Stack direction={'row'} spacing={7}>
          <HStack as={'nav'} spacing={6} display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
          <IconButton
            aria-label="Toggle light dark mode"
            onClick={toggleColorMode}
            icon={<SwitchIcon />}
            rounded="full"
            size="md"
          />
          <UserMenu />
        </Stack>
      </Flex>
    </Flex>
  );
}

export { MainNav };
