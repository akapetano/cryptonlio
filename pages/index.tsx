import { Box } from '@chakra-ui/react';
import { Navigation } from '../src/components/core/Navigation/Navigation';
import { TopTenCoinsTable } from '../src/components/features/home/TopTenCoinsTable/TopTenCoinsTable';
import { NextHead } from '../src/components/shared/NextHead/NextHead';
import { Welcome } from '../src/components/features/home/Welcome/Welcome';
import { SignUpForm } from '../src/components/core/SignUpForm/SignUpForm';

const HomePage = () => {
  return (
    <Box>
      <NextHead title="Crypton - Explore the World of Cryptocurrencies" />
      <main>
        <Navigation />
        <Welcome />
        <TopTenCoinsTable />

        {/* <SignUpForm /> */}
      </main>
    </Box>
  );
};

export default HomePage;
