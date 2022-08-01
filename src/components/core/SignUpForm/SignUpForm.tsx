import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Checkbox,
  Button,
  useBreakpointValue,
  Link as ChakraLink,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { SignUpFormContainer } from "./SignUpFormContainer/SignUpFormContainer";
import { Logo } from "../Logo/Logo";

export const SignUpForm = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  const formBgColor = useColorModeValue("white", "gray.800");
  const formBoxShadow = useColorModeValue(
    "0 1px 16px -1px rgba(0, 0, 0, .2)",
    "0 1px 16px 1px rgba(255, 255, 255, .05)"
  );

  return (
    <SignUpFormContainer>
      <VStack
        w="30rem"
        h="fit-content"
        p={10}
        spacing={4}
        alignItems="flex-start"
        border="1px solid"
        borderColor={formBgColor}
        rounded="xl"
        bg={formBgColor}
        boxShadow={formBoxShadow}
      >
        <Logo width="100" height="100" />
        <VStack spacing={3} alignItems="flex-start">
          <Heading size="2xl">Sign Up</Heading>
          <Text>
            If you already have an account, click{" "}
            <NextLink href="/sign-in" passHref>
              <ChakraLink
                _hover={{ color: "brand.500", textDecoration: "underline" }}
              >
                here to login.
              </ChakraLink>
            </NextLink>
          </Text>
        </VStack>
        <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>First Name*</FormLabel>
              <Input placeholder="First name" h="4rem" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>Last Name*</FormLabel>
              <Input placeholder="Last name" h="4rem" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Email*</FormLabel>
              <Input placeholder="Email" h="4rem" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Password*</FormLabel>
              <Input placeholder="Password" h="4rem" />
            </FormControl>
          </GridItem>

          <GridItem colSpan={2}>
            <Checkbox>
              I certify that I am 18 years of age or older, and agree to the
              User Agreement and Privacy Policy.
            </Checkbox>
          </GridItem>
          <GridItem colSpan={2}>
            <Button variant="primary" size="lg" w="full" h="5rem" disabled>
              Create Account
            </Button>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </SignUpFormContainer>
  );
};
