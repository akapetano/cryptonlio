import { Heading, Text } from '@chakra-ui/react';

interface ICoinDetails {
  coin?: string | string[] | undefined;
}

export const CoinDetails = ({ coin }: ICoinDetails) => {
  return <Heading>{coin}</Heading>;
};
