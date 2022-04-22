import Image from 'next/image';
import NextLink from 'next/link';
import { Link, Box } from '@chakra-ui/react';

export const Logo = () => {
  return (
    <Box>
      <NextLink href="/" passHref>
        <Link>
          <Image
            src="/images/crypton_logo-310x310.png"
            alt="crypton-logo"
            width="75"
            height="75
        "
          />
        </Link>
      </NextLink>
    </Box>
  );
};
