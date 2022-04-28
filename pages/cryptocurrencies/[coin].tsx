import { Box } from '@chakra-ui/react';
import { NextHead } from '../../src/components/shared/NextHead/NextHead';
import { Navigation } from '../../src/components/core/Navigation/Navigation';
import { CoinDetails } from '../../src/components/features/cryptocurrencies/[coin]/CoinDetails/CoinDetails';
import { useRouter } from 'next/router';
import { LayoutMain } from '../../src/components/shared/LayoutMain/LayoutMain';

const Coin = () => {
  const router = useRouter();
  const { coin } = router.query;

  return (
    <Box>
      <NextHead title="Crypton - Top 100 cryptocurrencies" />
      <main>
        <Navigation />
        <LayoutMain mt="2rem">
          <CoinDetails coin={coin} />
        </LayoutMain>
      </main>
    </Box>
  );
};

export default Coin;
