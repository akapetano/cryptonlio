import { Box } from '@chakra-ui/react';
import { NextHead } from '../../src/components/shared/NextHead/NextHead';
import { Navigation } from '../../src/components/core/Navigation/Navigation';
import { AllCryptoTable } from '../../src/components/features/cryptocurrencies/AllCryptoTable/AllCryptoTable';

const Cryptocurrencies = () => {
  return (
    <Box>
      <NextHead title="Crypton - Top 100 cryptocurrencies" />
      <main>
        <Navigation />
        <AllCryptoTable />
      </main>
    </Box>
  );
};

export default Cryptocurrencies;
