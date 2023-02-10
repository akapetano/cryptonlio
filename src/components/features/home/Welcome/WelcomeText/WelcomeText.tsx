import NextLink from "next/link";
import { VStack, Heading, Button } from "@chakra-ui/react";
import { useUser } from "@supabase/auth-helpers-react";

export const WelcomeText = () => {
  const { user } = useUser();
  return (
    <VStack spacing="1rem">
      <Heading
        as="h2"
        fontSize={["2xl", "3xl", "4xl", "5xl", "5xl"]}
        textAlign="center"
        letterSpacing="1px"
      >
        Your Journey <br /> To Financial Freedom <br /> Starts Here.
      </Heading>
      <Heading></Heading>
      {user ? (
        <NextLink href="/portfolio" passHref>
          <Button
            display="flex"
            flexDir="column"
            fontSize={{ base: "md", md: "lg" }}
            textAlign="center"
            letterSpacing="1px"
            mb="2rem"
            variant="primary"
            size="lg"
            py="2rem"
            px="1rem"
          >
            Create Your Portfolio
          </Button>
        </NextLink>
      ) : null}
    </VStack>
  );
};
