import { AllCoinsTable } from "../../src/components/features/cryptocurrencies/AllCoinsTable/AllCoinsTable";
import { Layout } from "../../src/components/shared/Layout/Layout";
import { LayoutMain } from "../../src/components/shared/LayoutMain/LayoutMain";
import { useAuth } from "../../hooks/useAuth";
import { useUser } from "@supabase/auth-helpers-react";

const Cryptocurrencies = () => {
  const { session } = useAuth();
  const { user } = useUser();

  return (
    <Layout
      headTitle="Cryptonlio - Top 250 cryptocurrencies"
      session={session}
      user={user}
    >
      <LayoutMain>
        <AllCoinsTable />
      </LayoutMain>
    </Layout>
  );
};

export default Cryptocurrencies;
