import { HStack, Box } from '@chakra-ui/react';
import { NavLink } from '../NavLink/NavLink';

const NAV_ITEMS = [
  'Home',
  'Dashboard',
  'Cryptocurrencies',
  'Create a Portfolio',
];

export const NavLinks = () => {
  return (
    <HStack as={'nav'} spacing={8} display={{ base: 'none', md: 'flex' }}>
      {NAV_ITEMS.map((navItem, index) => {
        return (
          <NavLink
            key={navItem + index}
            to={
              navItem === 'Home'
                ? '/'
                : `/${navItem.replace(/\s+/g, '-').toLowerCase()}`
            }
            linkName={navItem}
          />
        );
      })}
    </HStack>
  );
};
