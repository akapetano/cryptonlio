import Image from "next/image";
import { Link as ChakraLink, Flex, Text } from "@chakra-ui/react";

interface ILogoProps {
  width: string;
  height: string;
}

export const CoingeckoLogo = ({ width, height }: ILogoProps) => {
  return (
    <ChakraLink href="https://www.coingecko.com/" target="_blank">
      <Flex justifyContent="center" alignItems="center" gap="0.25rem">
        <Text m="0">CoinGecko</Text>
        <Image
          src="/images/coingecko-logo.svg"
          alt="coingecko-logo"
          width={width}
          height={height}
        />
      </Flex>
    </ChakraLink>
  );
};
