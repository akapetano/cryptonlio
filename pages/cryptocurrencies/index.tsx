import { AllCoinsTable } from "../../src/components/features/cryptocurrencies/AllCoinsTable/AllCoinsTable";
import { Layout } from "../../src/components/shared/Layout/Layout";
import { LayoutMain } from "../../src/components/shared/LayoutMain/LayoutMain";
import { Footer } from "../../src/components/core/Footer/Footer";
import { useAuth } from "../../hooks/useAuth";
import { useUser } from "@supabase/auth-helpers-react";

const Cryptocurrencies = () => {
  const { session, onSignOut } = useAuth();
  const { user } = useUser();

  return (
    <Layout
      headTitle="Crypton - Top 100 cryptocurrencies"
      session={session}
      user={user}
      onSignOut={onSignOut}
    >
      <LayoutMain>
        <AllCoinsTable />
      </LayoutMain>
    </Layout>
  );
};

export default Cryptocurrencies;
