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
  useColorModeValue,
} from "@chakra-ui/react";
import { ForgotPasswordFormContainer } from "./ForgotPasswordFormContainer/ForgotPasswordFormContainer";
import { Logo } from "../../../core/Logo/Logo";
import { useAuth } from "../../../../../hooks/useAuth";
import NextLink from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { IResetPasswordFormValues } from "../../../../../types/auth";

export const ForgotPasswordForm = () => {
  const formBgColor = useColorModeValue("white", "gray.800");
  const spinnerColor = useColorModeValue("brand.400", "brand.800");
  const formBoxShadow = useColorModeValue(
    "0 1px 16px -1px rgba(0, 0, 0, .2)",
    "0 1px 16px 1px rgba(255, 255, 255, .05)"
  );
  const { onForgotPassword } = useAuth();
  const zodSchema = z.object({
    email: z
      .string({
        required_error: "Email is required.",
      })
      .email("Please provide a valid email address.")
      .min(2),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IResetPasswordFormValues>({ resolver: zodResolver(zodSchema) });

  return (
    <ForgotPasswordFormContainer>
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
          <Heading size="xl">Forgot Password</Heading>
          <Text>
            Enter your email address to receive a link to reset your password.
          </Text>
        </VStack>
        <SimpleGrid
          as="form"
          onSubmit={handleSubmit(onForgotPassword)}
          columns={2}
          columnGap={3}
          rowGap={3}
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

          <GridItem colSpan={2} mt="1rem">
            <Button
              variant="primary"
              type="submit"
              size="lg"
              w="full"
              h="3rem"
              disabled={isSubmitting}
            >
              {isSubmitting ? <Spinner color={spinnerColor} /> : "Send Link"}
            </Button>
          </GridItem>
          <GridItem colSpan={2}>
            <NextLink href="/sign-in" passHref>
              <Button
                variant="secondary"
                size="lg"
                w="full"
                h="3rem"
                disabled={isSubmitting}
              >
                Go Back
              </Button>
            </NextLink>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </ForgotPasswordFormContainer>
  );
};
