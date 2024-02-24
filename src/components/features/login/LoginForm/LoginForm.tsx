import {
  FormControl,
  FormLabel,
  FormErrorMessage,
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
  Flex,
} from "@chakra-ui/react";
import { LoginFormContainer } from "./LoginFormContainer/LoginFormContainer";
import { Logo } from "../../../core/Logo/Logo";
import { useAuth } from "../../../../../hooks/useAuth";
import NextLink from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ISignUpFormValues } from "../../../../../types/auth";

export const LoginForm = () => {
  const formBgColor = useColorModeValue("white", "gray.800");
  const spinnerColor = useColorModeValue("brand.400", "brand.800");
  const formBoxShadow = useColorModeValue(
    "0 1px 16px -1px rgba(0, 0, 0, .2)",
    "0 1px 16px 1px rgba(255, 255, 255, .05)"
  );
  const { onLogin, user } = useAuth();
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
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ISignUpFormValues>({ resolver: zodResolver(zodSchema) });

  return (
    <LoginFormContainer>
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
        <Logo width="150" height="150" />
        <VStack spacing={3} alignItems="flex-start" justifyContent="flex-start">
          <Heading size="xl">Sign In</Heading>
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
          <FormControl
            as={GridItem}
            colSpan={2}
            isInvalid={Boolean(errors.email)}
          >
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              {...register("email", { required: true })}
              type="email"
              placeholder="Please enter your email address"
              h="3rem"
            />
            {errors?.email ? (
              <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
            ) : null}
          </FormControl>

          <FormControl
            as={GridItem}
            colSpan={2}
            isInvalid={Boolean(errors.password)}
          >
            <Flex flexDir="column">
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                {...register("password", { required: true })}
                type="password"
                placeholder="Please enter your password"
                h="3rem"
              />
              {errors?.password ? (
                <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
              ) : null}
              <NextLink href="/forgot-password" passHref>
                <ChakraLink alignSelf="end" fontSize="sm" mt="0.25rem">
                  Forgot Password?
                </ChakraLink>
              </NextLink>
            </Flex>
          </FormControl>

          <GridItem colSpan={2} mt="0.5rem">
            <Button
              variant="primary"
              type="submit"
              size="lg"
              w="full"
              h="3rem"
              disabled={isSubmitting}
            >
              {isSubmitting ? <Spinner color={spinnerColor} /> : "Sign In"}
            </Button>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </LoginFormContainer>
  );
};