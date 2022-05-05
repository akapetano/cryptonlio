import NextLink from 'next/link';
import { FaCoins, FaArrowRight } from 'react-icons/fa';
import { Icon, Text, HStack, useColorModeValue } from '@chakra-ui/react';

export const TopTenCoinsLink = () => {
  const linkColor = useColorModeValue('brand.200', 'brand.100');
  const linkHoverColor = useColorModeValue('brand.300', 'brand.50');

  return (
    <NextLink href={'#top-10-coins'} passHref>
      <HStack
        color={linkColor}
        _hover={{
          textDecoration: 'underline',
          cursor: 'pointer',
          color: linkHoverColor,
        }}
        sx={{}}
      >
        <Icon as={FaCoins} h={6} w={6} />
        <Text>Go to Top 10 Coins</Text>
        <Icon as={FaArrowRight} />
      </HStack>
    </NextLink>
  );
};
