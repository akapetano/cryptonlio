import { Container, Flex } from '@chakra-ui/react';
import Head from 'next/head';

import { MainNav } from '../src/sections/MainNav';
import Cart from '../src/sections/cart';
import Details from '../src/sections/details';

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>Crypton - Explore the World of Cryptocurrencies</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MainNav />
        <Container maxW="container.xl" p={0}>
          <Flex
            h={{ base: 'auto', md: '100vh' }}
            py={[0, 10, 20]}
            direction={{ base: 'column-reverse', md: 'row' }}
          >
            <Details />
            <Cart />
          </Flex>
        </Container>
      </main>
    </div>
  );
};

export default IndexPage;
