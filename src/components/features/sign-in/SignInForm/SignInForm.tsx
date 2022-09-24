import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Button,
  Spinner,
  Link as ChakraLink,
  useColorModeValue,
} from "@chakra-ui/react";
import { SignInFormContainer } from "./SignInFormContainer";
import { Logo } from "../../../core/Logo/Logo";
import { useAuth } from "../../../../../hooks/useAuth";
import NextLink from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ISignUpFormValues } from "../../../../../types/auth";

export const SignInForm = () => {
  const formBgColor = useColorModeValue("white", "gray.800");
  const spinnerColor = useColorModeValue("brand.400", "brand.800");
  const formBoxShadow = useColorModeValue(
    "0 1px 16px -1px rgba(0, 0, 0, .2)",
    "0 1px 16px 1px rgba(255, 255, 255, .05)"
  );
  const { onLogin } = useAuth();
  const zodSchema = z.object({
    email: z
      .string({
        required_error: "Email is required.",
      })
      .email("Please provide a valid email address.")
      .min(2),
    password: z
      .string({
        required_error: "Password is required.",
      })
      .min(6),
  });
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ISignUpFormValues>({ resolver: zodResolver(zodSchema) });

  return (
    <SignInFormContainer>
      <VStack
        w="30rem"
        h="fit-content"
        p={10}
        spacing={5}
        alignItems="start"
        justifyContent="center"
        border="1px solid"
        borderColor={formBgColor}
        rounded="xl"
        bg={formBgColor}
        boxShadow={formBoxShadow}
      >
        <Logo width="100" height="100" />
        <VStack spacing={3} alignItems="flex-start" justifyContent="flex-start">
          <Heading size="2xl">Sign In</Heading>
          <Text>
            If you do not have an account, click{" "}
            <NextLink href="/sign-up" passHref>
              <ChakraLink
                _hover={{ color: "brand.500", textDecoration: "underline" }}
              >
                here to sign up.
              </ChakraLink>
            </NextLink>
          </Text>
        </VStack>
        <SimpleGrid
          as="form"
          onSubmit={handleSubmit(onLogin)}
          columns={2}
          columnGap={3}
          rowGap={6}
          w="full"
        >
          <GridItem colSpan={2}>
            <FormControl isRequired>
              <FormLabel>
                Email
                <Input
                  type="email"
                  placeholder="Please enter your email address"
                  h="4rem"
                />
              </FormLabel>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl isRequired>
              <FormLabel>
                Password
                <Input
                  type="password"
                  placeholder="Please enter your password"
                  h="4rem"
                />
              </FormLabel>
            </FormControl>
          </GridItem>

          <GridItem colSpan={2}>
            <Button
              variant="primary"
              type="submit"
              size="lg"
              w="full"
              h="4rem"
              disabled={isSubmitting}
            >
              {isSubmitting ? <Spinner color={spinnerColor} /> : "Sign In"}
            </Button>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </SignInFormContainer>
  );
};
