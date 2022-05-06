import { NextHead } from '../../src/components/shared/NextHead/NextHead';
import { Layout } from '../../src/components/shared/Layout/Layout';
import { LayoutMain } from '../../src/components/shared/LayoutMain/LayoutMain';
import { Navigation } from '../../src/components/core/Navigation/Navigation';
import { CoinDetails } from '../../src/components/features/cryptocurrencies/[coin]/CoinDetails/CoinDetails';
import { GetStaticProps, GetStaticPaths } from 'next';
import { COINS_COINGECKO_API_URL } from '../../src/fetchers/cryptoFetcher';
import { Coin, CoinById } from '../../types/crypto';
import { Footer } from '../../src/components/core/Footer/Footer';

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
  coin: CoinById;
}

const Coin = ({ coin }: ICoinProps) => {
  return (
    <Layout>
      <NextHead title="Crypton - Top 100 cryptocurrencies" />
      <Navigation />
      <LayoutMain
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt="2rem"
      >
        <CoinDetails coin={coin} />
      </LayoutMain>
      <Footer />
    </Layout>
  );
};

export default Coin;
