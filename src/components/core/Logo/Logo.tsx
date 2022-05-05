import Image from 'next/image';
import NextLink from 'next/link';
import { Link as ChakraLink, Box } from '@chakra-ui/react';

interface ILogoProps {
  width: string;
  height: string;
}

export const Logo = ({ width, height }: ILogoProps) => {
  return (
    <NextLink href="/" passHref>
      <ChakraLink>
        <Box>
          <Image
            src="/images/crypton_logo-310x310.png"
            alt="crypton-logo"
            width={width}
            height={height}
          />
        </Box>
      </ChakraLink>
    </NextLink>
  );
};
