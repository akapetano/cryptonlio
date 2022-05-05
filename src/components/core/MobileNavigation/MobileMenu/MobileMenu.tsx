import {
  Button,
  Flex,
  FlexProps,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { ColorModeButton } from '../../ColorModeButton/ColorModeButton';
import { NavLinks } from '../../NavLinks/NavLinks';
import { UserMenu } from '../../UserMenu/UserMenu';

interface IMobileMenuProps extends FlexProps {
  isOpen: boolean;
  isLoggedIn: boolean;
}

export const MobileMenu = ({ isOpen, isLoggedIn }: IMobileMenuProps) => {
  const overlayBgColor = useColorModeValue(
    'rgba(255,255,255,0.55)',
    'rgba(0,0,0,0.55)'
  );

  return (
    <Flex
      as="nav"
      flexDir="column"
      bg={overlayBgColor}
      boxShadow="0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"
      backdropFilter="blur( 20px )"
      pt="20rem"
      height="100vh"
      width="100%"
      textAlign="center"
      position="fixed"
      top="0"
      right="0"
      transform={isOpen ? 'translateX(0)' : 'translateX(100%)'}
      transition="transform 0.3s ease-in-out"
      zIndex="20"
    >
      <VStack spacing={12}>
        <NavLinks
          display={{ base: 'flex', md: 'none' }}
          direction="column"
          justifyContent="center"
          alignItems="center"
        />

        {!isLoggedIn ? (
          <Button variant="secondary" width="35%">
            Sign in
          </Button>
        ) : null}
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <Button variant="primary" width="35%">
            Get started
          </Button>
        )}

        <ColorModeButton aria-label="Toggle color mode" />
      </VStack>
    </Flex>
  );
};
