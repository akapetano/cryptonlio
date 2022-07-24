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

export const SignInForm = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  const formBgColor = useColorModeValue("white", "gray.800");
  const formBoxShadow = useColorModeValue(
    "0 1px 16px -1px rgba(0, 0, 0, .2)",
    "0 1px 16px 1px rgba(255, 255, 255, .05)"
  );

  return (
    <SignInFormContainer>
      <VStack
        w="30rem"
        h="fit-content"
        p={10}
        spacing={10}
        alignItems="center"
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
          <Text>If you already have an account, click here to login.</Text>
        </VStack>
        <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input placeholder="Email" h="4rem" />
            </FormControl>
          </GridItem>

          <GridItem colSpan={2}>
            <Button variant="primary" size="lg" w="full" h="4rem" disabled>
              Sign In
            </Button>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </SignInFormContainer>
  );
};
