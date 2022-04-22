import { Box } from '@chakra-ui/react';
import { MainNav } from '../src/components/core/MainNav/MainNav';
import { CryptoTable } from '../src/components/features/home/CryptoTable/CryptoTable';
import { CryptoTableContainer } from '../src/components/features/home/CryptoTableContainer/CryptoTableContainer';
import { NextHead } from '../src/components/shared/NextHead/NextHead';

const HomePage = () => {
  return (
    <Box>
      <NextHead
        title="Crypton - Explore the World of Cryptocurrencies"
        metaDescription="Crypton is a cryptocurrency website"
      />
      <main>
        <MainNav />
        <CryptoTableContainer>
          <CryptoTable />
        </CryptoTableContainer>
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
