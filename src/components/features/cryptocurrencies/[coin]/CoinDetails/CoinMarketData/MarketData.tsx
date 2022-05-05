import { ContentCard } from '../ContentCard/ContentCard';
import { Heading, Box, Icon, Text, HStack } from '@chakra-ui/react';
import {
  AiOutlineDollar,
  AiFillPieChart,
  AiOutlineRise,
  AiOutlineFall,
} from 'react-icons/ai';
import { FaCoins } from 'react-icons/fa';
import { CoinById } from '../../../../../../../types/crypto';

interface IMarketDataProps {
  coin: CoinById;
}

export const CoinMarketData = ({ coin }: IMarketDataProps) => {
  return (
    <ContentCard>
      <Box>
        <Heading as="h3" fontSize="2xl" mb="1rem">
          Market data
        </Heading>
        <Box>
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

          <HStack spacing="1rem">
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
      </Box>
    </ContentCard>
  );
};
