import { Layout } from "../../src/components/shared/Layout/Layout";
import { LayoutMain } from "../../src/components/shared/LayoutMain/LayoutMain";
import { CoinDetails } from "../../src/components/features/cryptocurrencies/[coin]/CoinDetails/CoinDetails";
import { GetStaticProps, GetStaticPaths } from "next";
import {
  COIN_COINGECKO_API_URL,
  COINS_COINGECKO_API_URL_TOP10,
} from "../../constants/globals";
import { Coin, CoinById } from "../../types/crypto";
import { useAuth } from "../../hooks/useAuth";

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(COINS_COINGECKO_API_URL_TOP10);
  const coins: Coin[] = await response.json();

  const paths = coins.map(({ id }) => {
    return {
      params: { id: id },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.id;
  if (id && typeof id === "string") {
    const url = COIN_COINGECKO_API_URL(id);

    if (url) {
      const response = await fetch(url);
      const data = await response.json();

      return {
        props: { coin: data },
      };
    } else {
      return {
        props: { coin: null },
      };
    }
  } else {
    return {
      props: { coin: null },
    };
  }
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
