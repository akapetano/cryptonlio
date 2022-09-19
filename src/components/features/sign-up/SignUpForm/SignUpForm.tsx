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
  useBreakpointValue,
  Link as ChakraLink,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { SignUpFormContainer } from "./SignUpFormContainer/SignUpFormContainer";
import { Logo } from "../../../core/Logo/Logo";
import { Formik, FormikProps, Form } from "formik";
import { ISignUpFormValues } from "../../../../../types/auth";
import { useAuth } from "../../../../../hooks/useAuth";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

export const SignUpForm = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  const formBgColor = useColorModeValue("white", "gray.800");
  const formBoxShadow = useColorModeValue(
    "0 1px 16px -1px rgba(0, 0, 0, .2)",
    "0 1px 16px 1px rgba(255, 255, 255, .05)"
  );
  const spinnerColor = useColorModeValue("brand.400", "brand.800");
  const { handleSignUp } = useAuth();

  const initialValues: ISignUpFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    ageConfirmation: false,
  };

  const zodSchema = z
    .object({
      firstName: z.string().min(1),
      lastName: z.string().min(1),
      email: z.string().email(),
      password: z.string(),
      passwordConfirmation: z.string(),
      ageConfirmation: z.boolean(),
    })
    .refine((data) => data.password === data.passwordConfirmation, {
      message: "Passwords do not match.",
      path: ["passwordConfirmation"],
    });

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

        <Formik
          initialValues={initialValues}
          validationSchema={toFormikValidationSchema(zodSchema)}
          onSubmit={(values, actions) => {
            const response = handleSignUp(values);
            console.log(response);
            actions.setSubmitting(false);
          }}
        >
          {({
            errors,
            touched,
            values,
            handleChange,
            handleBlur,
            isSubmitting,
          }: FormikProps<ISignUpFormValues>) => (
            <Form>
              <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
                <GridItem colSpan={colSpan}>
                  <FormControl isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="First Name"
                      h="3rem"
                    />
                    {errors.firstName && touched.firstName ? (
                      <FormErrorMessage>
                        First name is required.
                      </FormErrorMessage>
                    ) : null}
                  </FormControl>
                </GridItem>
                <GridItem colSpan={colSpan}>
                  <FormControl isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Last name"
                      h="3rem"
                    />
                    {errors.lastName && touched.lastName ? (
                      <FormErrorMessage>
                        Last name is required.
                      </FormErrorMessage>
                    ) : null}
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Email"
                      h="3rem"
                    />
                    {errors.email && touched.email ? (
                      <FormErrorMessage>Email is required.</FormErrorMessage>
                    ) : null}
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input
                      name="password"
                      type="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Password"
                      h="3rem"
                    />
                    {errors.password && touched.password ? (
                      <FormErrorMessage>Password is required.</FormErrorMessage>
                    ) : null}
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl isRequired>
                    <FormLabel>Password Confirmation</FormLabel>
                    <Input
                      name="passwordConfirmation"
                      type="password"
                      value={values.passwordConfirmation}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Password"
                      h="3rem"
                    />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <Checkbox
                    name="ageConfirmation"
                    checked={values.ageConfirmation}
                    onChange={handleChange}
                  >
                    I certify that I am 18 years of age or older, and agree to
                    the User Agreement and Privacy Policy.
                  </Checkbox>
                </GridItem>
                <GridItem colSpan={2}>
                  <Button
                    variant="primary"
                    size="lg"
                    w="full"
                    h="3rem"
                    disabled={!values || isSubmitting}
                  >
                    {isSubmitting ? (
                      <Spinner color={spinnerColor} />
                    ) : (
                      "Create Account"
                    )}
                  </Button>
                </GridItem>
              </SimpleGrid>
            </Form>
          )}
        </Formik>
      </VStack>
    </SignUpFormContainer>
  );
};
