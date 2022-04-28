import { Box, Flex, Text, Heading, HStack, Link } from '@chakra-ui/react';
import parse, {
  attributesToProps,
  Element,
  Text as TextType,
} from 'html-react-parser';

import Image from 'next/image';

interface ICoinDetails {
  coin?: any;
}

export const CoinDetails = ({ coin }: ICoinDetails) => {
  console.log(coin);

  const coinDescription = parse(coin.description.en, {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.name === 'a') {
        const props = attributesToProps(domNode?.attribs);
        const text = (domNode.children[0] as TextType).data;
        return (
          <Link textDecoration="none" target="_blank" {...props}>
            {text}
          </Link>
        );
      }
    },
  });

  return (
    <Box>
      <HStack
        justifyContent="center"
        alignItems="center"
        spacing="1rem"
        mb="2rem"
      >
        <Heading as="h2">{coin.name}</Heading>
        <Box rounded="full">
          <Image
            loader={() => coin.image.large}
            src={coin.image.large}
            alt={coin.name}
            height="50px"
            width="50px"
            unoptimized
          />
        </Box>
      </HStack>
      <Flex flexDir="column" maxWidth="45rem" mb="2rem">
        <Heading as="h3" fontSize="2xl" mb="1rem">
          Description
        </Heading>
        <Text whiteSpace="pre-line">{coinDescription}</Text>
      </Flex>
      <Flex flexDir="column" maxWidth="45rem" mb="2rem">
        <Heading as="h3" fontSize="2xl" mb="1rem">
          Market data
        </Heading>
        <Text>
          All-Time High: $
          {coin.market_data.ath.usd > 1
            ? coin.market_data.ath.usd.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })
            : coin.market_data.ath.usd.toLocaleString(undefined, {
                minimumFractionDigits: 6,
                maximumFractionDigits: 6,
              })}
        </Text>
        <Text>
          Current Price: $
          {coin.market_data.current_price.usd > 1
            ? coin.market_data.current_price.usd.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })
            : coin.market_data.current_price.usd.toLocaleString(undefined, {
                minimumFractionDigits: 6,
                maximumFractionDigits: 6,
              })}
        </Text>
      </Flex>
    </Box>
  );
};
