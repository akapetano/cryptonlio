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
  Icon,
} from '@chakra-ui/react';
import parse, {
  attributesToProps,
  Element,
  Text as TextType,
} from 'html-react-parser';
import Image from 'next/image';
import { useState } from 'react';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import { BsGlobe2, BsGithub, BsReddit } from 'react-icons/bs';
import { FaCoins } from 'react-icons/fa';
import {
  AiOutlineRise,
  AiOutlineFall,
  AiOutlineDollar,
  AiFillPieChart,
} from 'react-icons/ai';
import { CoinById } from '../../../../../../types/crypto';
import { ChartSelector } from '../charts/ChartSelector/ChartSelector';

interface ICoinDetails {
  coin: CoinById;
}

export const CoinDetails = ({ coin }: ICoinDetails) => {
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
      <Flex
        flexDir="column"
        mb="2rem"
        justifyContent="center"
        alignItems="center"
      >
        <ChartSelector coinId={coin.id} />
      </Flex>
      <Flex flexDir="column" maxWidth="45rem" mb="2rem">
        <Heading as="h3" fontSize="2xl" mb="1rem">
          Market data
        </Heading>
        <Box mb="2rem">
          <HStack spacing="1rem" mb="1rem">
            <Icon as={AiOutlineDollar} w={6} h={6} />
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
          </HStack>

          <HStack spacing="1rem" mb="1rem">
            <Icon as={AiFillPieChart} w={6} h={6} />
            <Text fontSize="large">
              Market Cap: ${coin.market_data.market_cap.usd.toLocaleString()}
            </Text>
          </HStack>

          <HStack spacing="1rem" mb="1rem">
            <Icon as={FaCoins} w={6} h={6} />
            <Text fontSize="large">
              Total Supply:{' '}
              {coin.market_data.total_supply === null
                ? '?'
                : coin.market_data.total_supply.toLocaleString()}
            </Text>
          </HStack>

          <HStack spacing="1rem" mb="1rem">
            <Icon as={AiOutlineRise} w={6} h={6} />
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
          </HStack>

          <HStack spacing="1rem" mb="1rem">
            <Icon as={AiOutlineFall} w={6} h={6} />
            <Text fontSize="large">
              All-Time Low: $
              {coin.market_data.atl.usd > 0.01
                ? coin.market_data.atl.usd.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
                : coin.market_data.atl.usd.toLocaleString(undefined, {
                    minimumFractionDigits: 10,
                    maximumFractionDigits: 10,
                  })}
            </Text>
          </HStack>
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
            Resources
          </Heading>
          <HStack spacing="1rem" mb="1rem">
            <Icon as={BsGlobe2} w={6} h={6} />
            <Link mb="0.5rem" href={coin.links.homepage[0]} target="_blank">
              Official Website
            </Link>
          </HStack>
          <HStack spacing="1rem" mb="1rem">
            <Icon as={BsGithub} w={6} h={6} />
            <Link
              mb="0.5rem"
              href={coin.links.repos_url.github[0]}
              target="_blank"
            >
              GitHub
            </Link>
          </HStack>
          {coin.links.subreddit_url ? (
            <HStack spacing="1rem" mb="1rem">
              <Icon as={BsReddit} w={6} h={6} />
              <Link mb="0.5rem" href={coin.links.subreddit_url} target="_blank">
                Reddit
              </Link>
            </HStack>
          ) : null}
        </Flex>
      </Flex>
    </Box>
  );
};
