import { TopTenCoinsTable } from "../src/components/features/home/TopTenCoinsTable/TopTenCoinsTable";
import { Welcome } from "../src/components/features/home/Welcome/Welcome";
import { LayoutMain } from "../src/components/shared/LayoutMain/LayoutMain";
import { Layout } from "../src/components/shared/Layout/Layout";
import { useAuth } from "../hooks/useAuth";
import { useUser } from "@supabase/auth-helpers-react";
import { IllustrationCta } from "../src/components/features/home/IllustrationCta/IllustrationCta";

const HomePage = () => {
  const { user } = useUser();
  const { session } = useAuth();

  return (
    <Layout
      headTitle="Cryptonlio - Explore the World of Cryptocurrencies"
      user={user}
      session={session}
    >
      <LayoutMain>
        <Welcome />
        <IllustrationCta />
        <TopTenCoinsTable />
      </LayoutMain>
    </Layout>
  );
};

export default HomePage;
