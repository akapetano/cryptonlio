import { ReactNode } from 'react';
import { Link, useColorModeValue } from '@chakra-ui/react';

export const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    rounded={'md'}
    transition={'all .3s ease-in-out'}
    _hover={{
      textDecoration: 'none',
      color: useColorModeValue('brand.600', 'brand.300'),
      fontWeight: '600',
    }}
    _active={{ bg: useColorModeValue('brand.700', 'brand.400') }}
    href={'#'}
  >
    {children}
  </Link>
);
