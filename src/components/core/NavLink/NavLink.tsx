import { ReactNode } from 'react';
import { Link, useColorModeValue } from '@chakra-ui/react';

export const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    rounded={'md'}
    color={useColorModeValue('brand.400', 'brand.100')}
    fontWeight="600"
    transition="all .3s ease-in-out"
    fontSize="sm"
    textTransform="uppercase"
    _hover={{
      textDecoration: 'underline',
      color: useColorModeValue('brand.600', 'brand.200'),
    }}
    _active={{ bg: useColorModeValue('brand.700', 'brand.400') }}
    href={'#'}
  >
    {children}
  </Link>
);
