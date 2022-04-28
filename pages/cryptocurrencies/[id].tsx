import { Box } from '@chakra-ui/react';
import { NextHead } from '../../src/components/shared/NextHead/NextHead';
import { Navigation } from '../../src/components/core/Navigation/Navigation';
import { CoinDetails } from '../../src/components/features/cryptocurrencies/[coin]/CoinDetails/CoinDetails';
import { GetStaticProps, GetStaticPaths } from 'next';
import { LayoutMain } from '../../src/components/shared/LayoutMain/LayoutMain';
import { COINS_COINGECKO_API_URL } from '../../src/fetchers/cryptoFetcher';
import { Coin } from '../../types/crypto';

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(COINS_COINGECKO_API_URL);
  const coins: Coin[] = await response.json();

  const paths = coins.map(({ id }) => {
    return {
      params: { id: id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.id;
  const COIN_COINGECKO_API_URL = `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`;
  const response = await fetch(COIN_COINGECKO_API_URL);
  const data = await response.json();

  return {
    props: { coin: data },
  };
};

interface ICoinProps {
  coin: any;
}

const Coin = ({ coin }: ICoinProps) => {
  return (
    <Box>
      <NextHead title="Crypton - Top 100 cryptocurrencies" />
      <main>
        <Navigation />
        <LayoutMain mt="2rem">
          <CoinDetails coin={coin} />
        </LayoutMain>
      </main>
    </Box>
  );
};

export default Coin;
