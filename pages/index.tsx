import { TopTenCoinsTable } from "../src/components/features/home/TopTenCoinsTable/TopTenCoinsTable";
import { Welcome } from "../src/components/features/home/Welcome/Welcome";
import { LayoutMain } from "../src/components/shared/LayoutMain/LayoutMain";
import { Layout } from "../src/components/shared/Layout/Layout";
import { useAuth } from "../hooks/useAuth";
import { useUser } from "@supabase/auth-helpers-react";
import { PieGraphIllustration } from "../src/components/core/Illustrations/PieGraphIllustration/PieGraphIllustration";
import { BitcoinIllustration } from "../src/components/core/Illustrations/BitcoinIllustration/BitcoinIllustration";
import { TopTenCoinsLink } from "../src/components/features/home/TopTenCoinsLink/TopTenCoinsLink";
import { VStack, Link, Flex } from "@chakra-ui/react";
import { IllustrationTextWrapper } from "../src/components/features/home/IllustrationTextWrapper/IllustrationTextWrapper";
import NextLink from "next/link";
import { InvestmentIllustration } from "../src/components/core/Illustrations/InvestmentIllustration/InvestmentIllustration";

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
        <Flex flexDir={"column"} gap="-25rem">
          <IllustrationTextWrapper
            illustration={<BitcoinIllustration />}
            text={
              <>
                Bitcoin is still king. <br /> <TopTenCoinsLink />
              </>
            }
            textIsLeft={true}
          />
          <IllustrationTextWrapper
            illustration={<InvestmentIllustration />}
            text={
              <>
                Up for a deep dive? <br /> Check out more than 200{" "}
                <NextLink href={"/cryptocurrencies"} passHref>
                  <Link>cryptocurrencies</Link>
                </NextLink>
                .
              </>
            }
          />
          <IllustrationTextWrapper
            illustration={<PieGraphIllustration />}
            text={
              <>
                Want to track your investment? <br /> Build your{" "}
                <NextLink href={"/portfolios"} passHref>
                  <Link>portfolio</Link>
                </NextLink>
                .
              </>
            }
            textIsLeft={true}
          />
        </Flex>
        <TopTenCoinsTable session={session} />
      </LayoutMain>
    </Layout>
  );
};

export default HomePage;
