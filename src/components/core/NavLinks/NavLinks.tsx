import { HStack, Box, Link } from '@chakra-ui/react';
import { NavLink } from '../NavLink/NavLink';
import NextLink from 'next/link';
import { NAV_ITEMS } from '../../../../constants/constants';

export const NavLinks = () => {
  return (
    <HStack as={'nav'} spacing={8} display={{ base: 'none', md: 'flex' }}>
      <Box>
        {NAV_ITEMS.map((navItem) => {
          <NavLink
            key={navItem}
            to={`/${navItem.replace(/\s+/g, '-').toLowerCase()}`}
          >
            {navItem}
          </NavLink>;
        })}
      </Box>
    </HStack>
  );
};
