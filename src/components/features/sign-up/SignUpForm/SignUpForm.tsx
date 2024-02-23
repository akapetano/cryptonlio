import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Spinner,
  GridItem,
  Checkbox,
  Button,
  Select,
  useBreakpointValue,
  Link as ChakraLink,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { SignUpFormContainer } from "./SignUpFormContainer/SignUpFormContainer";
import { Logo } from "../../../core/Logo/Logo";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ISignUpFormValues } from "../../../../../types/auth";
import { useAuth } from "../../../../../hooks/useAuth";

export const SignUpForm = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  const formBgColor = useColorModeValue("white", "gray.800");
  const formBoxShadow = useColorModeValue(
    "0 1px 16px -1px rgba(0, 0, 0, .2)",
    "0 1px 16px 1px rgba(255, 255, 255, .05)"
  );
  const spinnerColor = useColorModeValue("brand.400", "brand.800");
  const { onSignUp, user } = useAuth();

  const zodSchema = z
    .object({
      firstName: z
        .string({
          required_error: "First name is required",
        })
        .min(1),
      lastName: z
        .string({
          required_error: "Last name is required",
        })
        .min(1),
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
      passwordConfirmation: z
        .string({
          required_error: "Password confirmation is required.",
        })
        .min(6),
      favoriteCrypto: z
        .string({
          required_error: "Favorite crypto is required.",
        })
        .min(2),
      selectAvatar: z
        .string({
          required_error: "Favorite crypto is required.",
        })
        .min(2),
      ageConfirmation: z.boolean({
        required_error: "You need to confirm your age.",
      }),
    })
    .refine((data) => data.password === data.passwordConfirmation, {
      message: "Passwords do not match.",
      path: ["passwordConfirmation"],
    });

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ISignUpFormValues>({ resolver: zodResolver(zodSchema) });

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
        <Logo width="150" height="150" />
        <VStack spacing={3} alignItems="flex-start">
          <Heading size="xl">Sign Up</Heading>
          <Text>
            If you already have an account, click{" "}
            <NextLink href="/login" passHref>
              <ChakraLink
                _hover={{ color: "brand.500", textDecoration: "underline" }}
              >
                here to login.
              </ChakraLink>
            </NextLink>
          </Text>
        </VStack>

        <SimpleGrid
          as="form"
          columns={2}
          columnGap={3}
          rowGap={6}
          w="full"
          onSubmit={handleSubmit(onSignUp)}
        >
          <FormControl
            as={GridItem}
            colSpan={colSpan}
            isInvalid={Boolean(errors.firstName)}
          >
            <FormLabel
              color={errors.firstName && "red.500"}
              htmlFor="firstName"
            >
              First Name
            </FormLabel>
            <Input
              {...register("firstName", { required: true })}
              name="firstName"
              placeholder="First Name"
              h="3rem"
              borderColor={errors.firstName ? "red.500" : "transparent"}
            />
            {errors?.firstName ? (
              <FormErrorMessage>{errors?.firstName?.message}</FormErrorMessage>
            ) : null}
          </FormControl>

          <FormControl
            as={GridItem}
            colSpan={colSpan}
            isInvalid={Boolean(errors.lastName)}
          >
            <FormLabel color={errors.lastName && "red.500"} htmlFor="lastName">
              Last Name
            </FormLabel>
            <Input
              {...register("lastName", { required: true })}
              name="lastName"
              placeholder="Last name"
              h="3rem"
            />
            {errors?.lastName?.message ? (
              <FormErrorMessage>{errors?.lastName?.message}</FormErrorMessage>
            ) : null}
          </FormControl>

          <FormControl
            as={GridItem}
            colSpan={2}
            isInvalid={Boolean(errors.email)}
          >
            <FormLabel color={errors.email && "red.500"} htmlFor="email">
              Email
            </FormLabel>
            <Input
              {...register("email", { required: true })}
              name="email"
              placeholder="Email"
              h="3rem"
              borderColor={errors.email ? "red.500" : "transparent"}
            />
            {errors?.email ? (
              <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
            ) : null}
          </FormControl>

          <FormControl
            as={GridItem}
            colSpan={2}
            isInvalid={Boolean(errors.favoriteCrypto)}
          >
            <FormLabel
              color={errors.favoriteCrypto && "red.500"}
              htmlFor="favoriteCrypto"
            >
              Favorite Cryptocurrency
            </FormLabel>
            <Input
              {...register("favoriteCrypto", { required: true })}
              placeholder="Enter your favorite cryptocurrency"
              name="favoriteCrypto"
              h="3rem"
            />
          </FormControl>

          <FormControl
            as={GridItem}
            colSpan={2}
            isInvalid={Boolean(errors.selectAvatar)}
          >
            <FormLabel
              color={errors.selectAvatar && "red.500"}
              htmlFor="selectAvatar"
            >
              Select Avatar
            </FormLabel>
            <Select
              {...register("selectAvatar", { required: true })}
              name="selectAvatar"
              placeholder="Select your avatar"
              rounded="md"
              h="3rem"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="human">Human</option>
              <option value="identicon">Identicon</option>
              <option value="initials">Initials</option>
              <option value="bottts">Bot</option>
              <option value="avataaars">Avatar</option>
              <option value="jdenticon">Jdenticon</option>
              <option value="gridy">Gridy</option>
              <option value="micah">Micah</option>
            </Select>
          </FormControl>

          <FormControl
            as={GridItem}
            colSpan={2}
            isInvalid={Boolean(errors.password)}
          >
            <FormLabel color={errors.password && "red.500"} htmlFor="password">
              Password
            </FormLabel>
            <Input
              {...register("password", { required: true })}
              name="password"
              type="password"
              placeholder="Password"
              h="3rem"
            />
            {errors?.password?.message ? (
              <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
            ) : null}
          </FormControl>

          <FormControl
            as={GridItem}
            colSpan={2}
            isInvalid={Boolean(errors.passwordConfirmation)}
          >
            <FormLabel
              color={errors.passwordConfirmation && "red.500"}
              htmlFor="passwordConfirmation"
            >
              Password Confirmation
            </FormLabel>
            <Input
              {...register("passwordConfirmation", { required: true })}
              name="passwordConfirmation"
              type="password"
              placeholder="Password"
              h="3rem"
            />
            {errors?.passwordConfirmation?.message ? (
              <FormErrorMessage>
                {errors?.passwordConfirmation?.message}
              </FormErrorMessage>
            ) : null}
          </FormControl>

          <FormControl
            as={GridItem}
            colSpan={2}
            isInvalid={Boolean(errors.ageConfirmation)}
          >
            <Checkbox
              {...register("ageConfirmation", { required: true })}
              name="ageConfirmation"
              type="checkbox"
            >
              I certify that I am 18 years of age or older, and agree to the
              User Agreement and Privacy Policy.
            </Checkbox>
          </FormControl>

          <GridItem colSpan={2}>
            <Button
              variant="primary"
              size="lg"
              w="full"
              h="3rem"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? (
                <Spinner color={spinnerColor} />
              ) : (
                "Create Account"
              )}
            </Button>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </SignUpFormContainer>
  );
};
