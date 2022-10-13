import { LayoutMain } from "../src/components/shared/LayoutMain/LayoutMain";
import { Layout } from "../src/components/shared/Layout/Layout";

import { useAuth } from "../hooks/useAuth";
import { useUser } from "@supabase/auth-helpers-react";
import { PortfolioUserHeader } from "../src/components/features/portfolio/PortfolioUserHeader/PortfolioUserHeader";

const Portfolio = () => {
  const { session } = useAuth();
  const { user } = useUser();
  return (
    <Layout
      headTitle="Crypton - Create Your Portfolio Now"
      session={session}
      user={user}
    >
      <LayoutMain>
        <PortfolioUserHeader />
      </LayoutMain>
    </Layout>
  );
};

export default Portfolio;
