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
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { SignInFormContainer } from "./SignInFormContainer/SignInFormContainer";
import { Logo } from "../Logo/Logo";
import { useAuth } from "../../../../hooks/useAuth";
import { FormEvent } from "react";

export const SignInForm = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  const formBgColor = useColorModeValue("white", "gray.800");
  const formBoxShadow = useColorModeValue(
    "0 1px 16px -1px rgba(0, 0, 0, .2)",
    "0 1px 16px 1px rgba(255, 255, 255, .05)"
  );
  const { email, setEmail, loading, setLoading, handleLogin } = useAuth();

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
              onClick={(e) => {
                e.preventDefault();
                handleLogin(email);
              }}
            >
              Sign In
            </Button>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </SignInFormContainer>
  );
};
