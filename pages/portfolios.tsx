import { LayoutMain } from "../src/components/shared/LayoutMain/LayoutMain";
import { Layout } from "../src/components/shared/Layout/Layout";
import { useAuth } from "../hooks/useAuth";
import { useUser } from "@supabase/auth-helpers-react";
import { PortfolioContent } from "../src/components/features/portfolios/PortfolioContent/PortfolioContent";

const Portfolios = () => {
  const { session } = useAuth();
  const { user } = useUser();
  return (
    <Layout
      headTitle="Cryptonlio - Create Your Portfolio Now"
      session={session}
      user={user}
    >
      <LayoutMain>
        <PortfolioContent />
      </LayoutMain>
    </Layout>
  );
};

export default Portfolios;
