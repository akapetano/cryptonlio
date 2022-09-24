import { Navigation } from "../src/components/shared/Navigation/Navigation";
import { NextHead } from "../src/components/shared/NextHead/NextHead";
import { Footer } from "../src/components/core/Footer/Footer";
import { LayoutMain } from "../src/components/shared/LayoutMain/LayoutMain";
import { Layout } from "../src/components/shared/Layout/Layout";
import { MdConstruction } from "react-icons/md";
import { Flex, Icon, useColorModeValue, Heading } from "@chakra-ui/react";
import { useAuth } from "../hooks/useAuth";

const CreateAPortfolio = () => {
  const constructionColor = useColorModeValue("brand.400", "brand.300");
  const { session, user, onSignOut } = useAuth();
  return (
    <Layout>
      <NextHead title="Crypton - Create Your Portfolio Now" />
      <Navigation session={session} user={user} onSignOut={onSignOut} />
      <LayoutMain>
        <Flex
          height="100vh"
          alignItems="center"
          justifyContent="center"
          flexDir="column"
          color={constructionColor}
        >
          <Icon as={MdConstruction} w={150} h={150} />
          <Heading>Under Construction...</Heading>
        </Flex>
      </LayoutMain>
      <Footer />
    </Layout>
  );
};

export default CreateAPortfolio;
