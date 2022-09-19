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

export const SignUpForm = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  const formBgColor = useColorModeValue("white", "gray.800");
  const formBoxShadow = useColorModeValue(
    "0 1px 16px -1px rgba(0, 0, 0, .2)",
    "0 1px 16px 1px rgba(255, 255, 255, .05)"
  );

  const initialValues: ISignUpFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    ageConfirmation: false,
  };

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
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props: FormikProps<ISignUpFormValues>) => (
            <Form onSubmit={props.handleSubmit}>
              <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
                <GridItem colSpan={colSpan}>
                  <FormControl isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      name="firstName"
                      value={props.values.firstName}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      placeholder="First Name"
                      h="3rem"
                    />
                    {props.errors.firstName && props.touched.firstName ? (
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
                      value={props.values.lastName}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      placeholder="Last name"
                      h="3rem"
                    />
                    {props.errors.lastName && props.touched.lastName ? (
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
                      value={props.values.email}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      placeholder="Email"
                      h="3rem"
                    />
                    {props.errors.email && props.touched.email ? (
                      <FormErrorMessage>Email is required.</FormErrorMessage>
                    ) : null}
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input
                      name="password"
                      value={props.values.password}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      placeholder="Password"
                      h="3rem"
                    />
                    {props.errors.password && props.touched.password ? (
                      <FormErrorMessage>Password is required.</FormErrorMessage>
                    ) : null}
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl isRequired>
                    <FormLabel>Password Confirmation</FormLabel>
                    <Input
                      name="passwordConfirmation"
                      value={props.values.passwordConfirmation}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      placeholder="Password"
                      h="3rem"
                    />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <Checkbox
                    name="ageConfirmation"
                    checked={props.values.ageConfirmation}
                    onChange={props.handleChange}
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
                    disabled
                  >
                    Create Account
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
