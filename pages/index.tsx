import { TopTenCoinsTable } from "../src/components/features/home/TopTenCoinsTable/TopTenCoinsTable";
import { Welcome } from "../src/components/features/home/Welcome/Welcome";
import { LayoutMain } from "../src/components/shared/LayoutMain/LayoutMain";
import { Layout } from "../src/components/shared/Layout/Layout";
import { useAuth } from "../hooks/useAuth";
import { useUser } from "@supabase/auth-helpers-react";

const HomePage = () => {
  const { user } = useUser();
  const { session } = useAuth();

  return (
    <Layout
      headTitle="Crypton - Explore the World of Cryptocurrencies"
      user={user}
      session={session}
    >
      <LayoutMain>
        <Welcome />
        <TopTenCoinsTable session={session} />
      </LayoutMain>
    </Layout>
  );
};

export default HomePage;
