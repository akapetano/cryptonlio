import { Navigation } from '../src/components/core/Navigation/Navigation';
import { NextHead } from '../src/components/shared/NextHead/NextHead';
import { Footer } from '../src/components/core/Footer/Footer';
import { LayoutMain } from '../src/components/shared/LayoutMain/LayoutMain';
import { Layout } from '../src/components/shared/Layout/Layout';
import { MdConstruction } from 'react-icons/md';
import { Flex, Icon, useColorModeValue, Heading } from '@chakra-ui/react';

const CreateAPortfolio = () => {
  const constructionColor = useColorModeValue('brand.400', 'brand.300');
  return (
    <Layout>
      <NextHead title="Crypton - Explore the World of Cryptocurrencies" />
      <Navigation />
      <LayoutMain>
        <Flex
          height="60vh"
          alignItems="center"
          justifyContent="center"
          flexDir="column"
          color={constructionColor}
        >
          <Icon as={MdConstruction} w={150} h={150} />
          <Heading>Work In Progress...</Heading>
        </Flex>
      </LayoutMain>
      <Footer />
    </Layout>
  );
};

export default CreateAPortfolio;
