import { Container, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import { Column } from 'react-table';

import { MainNav } from '../src/components/core/MainNav/MainNav';
// import Cart from '../src/components/cart';
// import Details from '../src/components/details';
import { CryptoTable } from '../src/components/CryptoTable/CryptoTable';

export type CryptoData = {
  cryptoId: string;
  cryptoName: string;
  priceInUSD: number;
  marketCap: number;
};

const cryptocurrencies: CryptoData[] = [
  {
    cryptoId: 'BTC',
    cryptoName: 'Bitcoin',
    priceInUSD: 39297.43,
    marketCap: 743927748657,
  },
  {
    cryptoId: 'ETH',
    cryptoName: 'Ethereum',
    priceInUSD: 2604.5,
    marketCap: 311603507595,
  },
  {
    cryptoId: 'BNB',
    cryptoName: 'BNB',
    priceInUSD: 377.58,
    marketCap: 63389911412,
  },
  {
    cryptoId: 'XRP',
    cryptoName: 'XRP',
    priceInUSD: 0.734506,
    marketCap: 3510309186,
  },
  {
    cryptoId: 'LUNA',
    cryptoName: 'Terra',
    priceInUSD: 97.2,
    marketCap: 34663679968,
  },
  {
    cryptoId: 'SOL',
    cryptoName: 'Solana',
    priceInUSD: 82.84,
    marketCap: 26694367656,
  },
  {
    cryptoId: 'ADA',
    cryptoName: 'Cardano',
    priceInUSD: 0.80927,
    marketCap: 25926918976,
  },
  {
    cryptoId: 'AVAX',
    cryptoName: 'Avalanche',
    priceInUSD: 73.37,
    marketCap: 19438799990,
  },
  {
    cryptoId: 'DOT',
    cryptoName: 'Polkadot',
    priceInUSD: 17.04,
    marketCap: 18545718814,
  },
  {
    cryptoId: 'DOGE',
    cryptoName: 'Dogecoin',
    priceInUSD: 0.116835,
    marketCap: 15448543380,
  },
];

const columns: Column[] = [
  {
    Header: 'ID',
    accessor: 'cryptocurrencyId',
    isNumeric: false,
  },
  {
    Header: 'COIN',
    accessor: 'cryptocurrencyName',
    isNumeric: false,
  },
  {
    Header: 'PRICE',
    accessor: 'cryptocurrencyPrice',
    isNumeric: true,
  },
  {
    Header: 'MARKET CAP',
    accessor: 'cryptocurrencyMarketCap',
    isNumeric: true,
  },
];

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Crypton - Explore the World of Cryptocurrencies</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MainNav />
        <Container maxW="container.xl" p={5}>
          <CryptoTable columns={columns} data={cryptocurrencies} />
          <Flex
            h={{ base: 'auto', md: '100vh' }}
            py={[0, 10, 20]}
            direction={{ base: 'column-reverse', md: 'row' }}
          >
            {/* <Details /> */}
            {/* <Cart /> */}
          </Flex>
        </Container>
      </main>
    </div>
  );
};

export default HomePage;
