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
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { SignInFormContainer } from "./SignInFormContainer";
import { Logo } from "../Logo/Logo";
import { useAuth } from "../../../../hooks/useAuth";
import { FormEvent, MouseEventHandler } from "react";

export const SignInForm = () => {
  const formBgColor = useColorModeValue("white", "gray.800");
  const spinnerColor = useColorModeValue("brand.400", "brand.800");
  const formBoxShadow = useColorModeValue(
    "0 1px 16px -1px rgba(0, 0, 0, .2)",
    "0 1px 16px 1px rgba(255, 255, 255, .05)"
  );
  const toast = useToast();
  const { email, setEmail, loading, setLoading, handleLogin } = useAuth();
  const onSignIn: MouseEventHandler = async (e) => {
    e.preventDefault();
    const response = await handleLogin(email);
    console.log(response);
    toast({
      position: "top",
      title: "Magic link set.",
      description: "Check your email for the login link!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

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
          <Text>Sign in via magic link with your email below</Text>
        </VStack>
        <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>
                Email
                <Input
                  type="email"
                  placeholder="Please enter your email address"
                  h="4rem"
                  value={email}
                  onChange={(e: FormEvent<HTMLInputElement>) =>
                    setEmail(e?.currentTarget.value)
                  }
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
              disabled={!email || loading}
              onClick={(e) => onSignIn(e)}
            >
              {loading ? <Spinner color={spinnerColor} /> : "Sign In"}
            </Button>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </SignInFormContainer>
  );
};
