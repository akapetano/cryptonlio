import { LayoutMain } from "../src/components/shared/LayoutMain/LayoutMain";
import { Layout } from "../src/components/shared/Layout/Layout";
import { MdConstruction } from "react-icons/md";
import { Flex, Icon, useColorModeValue, Heading } from "@chakra-ui/react";
import { useAuth } from "../hooks/useAuth";
import { useUser } from "@supabase/auth-helpers-react";

const Settings = () => {
  const constructionColor = useColorModeValue("brand.400", "brand.300");
  const { session, onSignOut } = useAuth();
  const { user } = useUser();
  return (
    <Layout
      headTitle="Crypton - User Settings"
      session={session}
      user={user}
      onSignOut={onSignOut}
    >
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
    </Layout>
  );
};

export default Settings;
