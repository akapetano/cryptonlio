import { Layout } from "../../src/components/shared/Layout/Layout";
import { LayoutMain } from "../../src/components/shared/LayoutMain/LayoutMain";
import { CoinDetails } from "../../src/components/features/cryptocurrencies/[coin]/CoinDetails/CoinDetails";
import { GetStaticProps, GetStaticPaths } from "next";
import { COINS_COINGECKO_API_URL } from "../../constants/globals";
import { Coin, CoinById } from "../../types/crypto";
import { useAuth } from "../../hooks/useAuth";

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
  const { session, user } = useAuth();

  return (
    <Layout
      headTitle={`Cryptonlio - ${coin.name}`}
      session={session}
      user={user}
    >
      <LayoutMain
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt="2rem"
      >
        <CoinDetails coin={coin} />
      </LayoutMain>
    </Layout>
  );
};

export default Coin;
