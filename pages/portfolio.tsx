import { LayoutMain } from "../src/components/shared/LayoutMain/LayoutMain";
import { Layout } from "../src/components/shared/Layout/Layout";
import { MdConstruction } from "react-icons/md";
import { Flex, Icon, useColorModeValue, Heading } from "@chakra-ui/react";
import { useAuth } from "../hooks/useAuth";
import { useUser } from "@supabase/auth-helpers-react";
import { PortfolioUserHeader } from "../src/components/features/portfolio/PortfolioUserHeader/PortfolioUserHeader";

const Portfolio = () => {
  const constructionColor = useColorModeValue("brand.400", "brand.300");
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
