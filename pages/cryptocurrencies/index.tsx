import { Box } from '@chakra-ui/react';
import { NextHead } from '../../src/components/shared/NextHead/NextHead';
import { Navigation } from '../../src/components/core/Navigation/Navigation';
import { AllCoinsTable } from '../../src/components/features/cryptocurrencies/AllCoinsTable/AllCoinsTable';

const Cryptocurrencies = () => {
  return (
    <Box>
      <NextHead title="Crypton - Top 100 cryptocurrencies" />
      <main>
        <Navigation />
        <AllCoinsTable />
      </main>
    </Box>
  );
};

export default Cryptocurrencies;
