import Link from "next/link";
import { VStack, Heading, Button, Text } from "@chakra-ui/react";

export const WelcomeText = () => {
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
      <Link href="/portfolio" passHref>
        <Button
          display="flex"
          flexDir="column"
          fontSize={["md", "md", "lg", "xl", "xl"]}
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
      </Link>
    </VStack>
  );
};
