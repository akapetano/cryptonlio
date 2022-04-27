import Image from 'next/image';
import NextLink from 'next/link';
import { Link as ChakraLink, Box } from '@chakra-ui/react';

export const Logo = () => {
  return (
    <NextLink href="/" passHref>
      <ChakraLink>
        <Box>
          <Image
            src="/images/crypton_logo-310x310.png"
            alt="crypton-logo"
            width="75"
            height="75
        "
          />
        </Box>
      </ChakraLink>
    </NextLink>
  );
};
