import {
  Link as ChakraLink,
  LinkProps,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

interface INavLinkProps extends LinkProps {
  children: string;
  to: string;
}

export const NavLink = ({ to, children, ...restProps }: INavLinkProps) => {
  const router = useRouter();
  const isActive = router.pathname === to;
  const chakraLinkBg = useColorModeValue('brand.600', 'brand.200');
  const chakraLinkActiveBg = useColorModeValue('brand.700', 'brand.300');
  const chakraLinkColor = useColorModeValue('white', 'gray.800');

  if (isActive) {
    return (
      <NextLink href={to} passHref>
        <ChakraLink
          color={chakraLinkColor}
          h="2rem"
          opacity="1"
          rounded="md"
          fontWeight="600"
          bg={chakraLinkBg}
          fontSize="sm"
          textTransform="uppercase"
          p="0.7rem"
          _hover={{ bg: chakraLinkActiveBg }}
          _active={{ bg: chakraLinkActiveBg }}
          {...restProps}
        >
          {children}
        </ChakraLink>
      </NextLink>
    );
  }

  return (
    <NextLink href={to} passHref>
      <ChakraLink
        color={chakraLinkColor}
        rounded={'md'}
        fontWeight="600"
        transition="text-decoration .3s ease, color .3s ease"
        fontSize="sm"
        textTransform="uppercase"
        p="0.7rem"
        _hover={{
          color: 'white',
          bg: chakraLinkBg,
          transition: 'text-decoration .3s ease-out, color .3s ease-out',
        }}
        _active={{ bg: chakraLinkActiveBg }}
        {...restProps}
      >
        {children}
      </ChakraLink>
    </NextLink>
  );
};
