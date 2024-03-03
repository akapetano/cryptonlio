import { Layout } from "../../src/components/shared/Layout/Layout";
import { LayoutMain } from "../../src/components/shared/LayoutMain/LayoutMain";
import { CoinDetails } from "../../src/components/features/cryptocurrencies/[coin]/CoinDetails/CoinDetails";
import { GetStaticProps, GetStaticPaths } from "next";
import { Coin, CoinBySlug } from "../../types/coins";
import { useAuth } from "../../hooks/useAuth";

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("http://localhost:3000/api/top-ten");

  const coins: Coin[] = await response.json();

  const paths = coins?.map(({ slug }) => {
    return {
      params: { slug: slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context?.params?.slug;
  if (slug && typeof slug === "string") {
    const queryParams = new URLSearchParams({ slug }).toString();
    const response = await fetch(
      `http://localhost:3000/api/coin?${queryParams}`
    );
    const data = await response.json();

    return {
      props: { coin: data },
    };
  } else {
    return {
      props: { coin: null },
    };
  }
};

interface ICoinProps {
  coin: CoinBySlug;
}

const CoinPage = ({ coin }: ICoinProps) => {
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

export default CoinPage;
