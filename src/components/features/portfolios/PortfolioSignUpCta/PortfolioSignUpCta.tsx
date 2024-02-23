import { Flex, Button, Heading } from "@chakra-ui/react";
import { Card } from "../../../core/Card/Card";
import { useRouter } from "next/router";
import { SignUpIllustration } from "../../../core/Illustrations/SignUpIllustration/SignUpIllustration";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

export const PortfolioSignUpCta = () => {
  const router = useRouter();

  return (
    <Card p="1rem" mt="2rem" mb="20rem">
      <Flex
        justifyContent="center"
        alignItems="center"
        gap="1rem"
        flexDirection="column"
      >
        <Heading as="h4" size="lg" m="0" mt="1rem">
          Sign up to create your portfolios!
        </Heading>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          fontSize="xl"
          textAlign="center"
        >
          <Link as={NextLink} href={"/sign-up"} passHref>
            <Button
              variant="primary"
              size="lg"
              p="0.5rem 2.5rem"
              mt="2rem"
              w="full"
            >
              Sign Up
            </Button>
          </Link>
          <Flex maxW={{ base: "10rem", sm: "15rem", md: "30rem" }}>
            <SignUpIllustration />
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};
