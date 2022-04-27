import { Box } from '@chakra-ui/react';
import { Navigation } from '../src/components/core/Navigation/Navigation';
import { TopTenCryptoTable } from '../src/components/features/home/TopTenCryptoTable/TopTenCryptoTable';
import { CryptoTableContainer } from '../src/components/core/CryptoTableContainer/CryptoTableContainer';
import { NextHead } from '../src/components/shared/NextHead/NextHead';
import { Welcome } from '../src/components/features/home/Welcome/Welcome';

const HomePage = () => {
  return (
    <Box>
      <NextHead title="Crypton - Explore the World of Cryptocurrencies" />
      <main>
        <Navigation />
        <Welcome />
        <TopTenCryptoTable />
        {/* <Flex
            h={{ base: 'auto', md: '100vh' }}
            py={[0, 10, 20]}
            direction={{ base: 'column-reverse', md: 'row' }}
          >
            <Details />
            <Cart />
          </Flex> */}
      </main>
    </Box>
  );
};

export default HomePage;
