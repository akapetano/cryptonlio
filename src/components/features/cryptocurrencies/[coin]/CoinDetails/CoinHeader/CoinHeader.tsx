import Image from 'next/image';
import { Badge, VStack, HStack, Heading, Box } from '@chakra-ui/react';
import { CoinById } from '../../../../../../../types/crypto';

interface ICoinHeaderProps {
  coin: CoinById;
}

export const CoinHeader = ({ coin }: ICoinHeaderProps) => {
  return (
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
  );
};
