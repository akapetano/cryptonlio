import {
  Box,
  Flex,
  Text,
  Heading,
  VStack,
  HStack,
  Link,
  Button,
  Badge,
} from '@chakra-ui/react';
import parse, {
  attributesToProps,
  Element,
  Text as TextType,
} from 'html-react-parser';
import Image from 'next/image';
import { useState } from 'react';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import { LineChart } from '../charts/LineChart/LineChart';
import { CoinById } from '../../../../../../types/crypto';

interface ICoinDetails {
  coin: CoinById;
}

export const CoinDetails = ({ coin }: ICoinDetails) => {
  console.log(coin);
  const [readMore, setReadMore] = useState(false);

  const coinDescription = parse(
    readMore ? coin.description.en : coin.description.en.slice(0, 350),
    {
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
    }
  );

  return (
    <Box>
      <VStack
        justifyContent="center"
        alignItems="center"
        spacing="1rem"
        mb="2rem"
      >
        <Badge variant="primary">Rank #{coin.market_cap_rank}</Badge>
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
      </VStack>
      <Box>
        <LineChart coin={coin} />
      </Box>
      <Flex flexDir="column" maxWidth="45rem" mb="2rem">
        <Heading as="h3" fontSize="2xl" mb="1rem">
          Market data
        </Heading>
        <Box mb="2rem">
          <Text fontSize="large">
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
          <Text fontSize="large">
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
          <Text fontSize="large">
            Market Cap: ${coin.market_data.market_cap.usd.toLocaleString()}
          </Text>
        </Box>
        <Flex flexDir="column" maxWidth="45rem" mb="2rem">
          <Heading as="h3" fontSize="2xl" mb="1rem">
            Description
          </Heading>
          <Box>
            <Text whiteSpace="pre-line" mb="1rem">
              {coinDescription} {readMore ? '' : ' (...)'}
            </Text>

            <Button
              onClick={() =>
                readMore ? setReadMore(false) : setReadMore(true)
              }
              rightIcon={readMore ? <MdExpandLess /> : <MdExpandMore />}
              size="sm"
              variant="primary"
            >
              Read {readMore ? 'Less' : 'More'}
            </Button>
          </Box>
        </Flex>
        <Flex flexDir="column" maxWidth="45rem" mb="2rem">
          <Heading as="h3" fontSize="2xl" mb="1rem">
            Website
          </Heading>
          <Link mb="0.5rem" href={coin.links.homepage[0]} target="_blank">
            {coin.links.homepage[0]}
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};
