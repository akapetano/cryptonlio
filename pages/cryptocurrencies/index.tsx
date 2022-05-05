import { Box } from '@chakra-ui/react';
import { NextHead } from '../../src/components/shared/NextHead/NextHead';
import { Navigation } from '../../src/components/core/Navigation/Navigation';
import { AllCoinsTable } from '../../src/components/features/cryptocurrencies/AllCoinsTable/AllCoinsTable';
import { Layout } from '../../src/components/shared/Layout/Layout';
import { LayoutMain } from '../../src/components/shared/LayoutMain/LayoutMain';
import { Footer } from '../../src/components/core/Footer/Footer';
import { Search } from '../../src/components/features/cryptocurrencies/Search/Search';

const Cryptocurrencies = () => {
  return (
    <Layout>
      <NextHead title="Crypton - Top 100 cryptocurrencies" />
      <LayoutMain>
        <Navigation />
        <Search />
        <AllCoinsTable />
      </LayoutMain>
      <Footer />
    </Layout>
  );
};

export default Cryptocurrencies;
