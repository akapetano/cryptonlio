import { LayoutMain } from "../src/components/shared/LayoutMain/LayoutMain";
import { Layout } from "../src/components/shared/Layout/Layout";
import { useAuth } from "../hooks/useAuth";
import { useUser } from "@supabase/auth-helpers-react";
import { PortfolioContent } from "../src/components/features/portfolio/PortfolioContent/PortfolioContent";

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
        <PortfolioContent />
      </LayoutMain>
    </Layout>
  );
};

export default Portfolio;
