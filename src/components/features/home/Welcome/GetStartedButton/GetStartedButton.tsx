import { Stack, Button, VStack, Input } from "@chakra-ui/react";

export const GetStartedButton = () => {
  return (
    <VStack spacing="1rem" w={{ base: "full", md: "auto" }}>
      <Stack
        spacing="1rem"
        direction={{ base: "column", md: "row" }}
        w={{ base: "full", md: "auto" }}
      >
        <Input
          placeholder="Email address"
          variant="filled"
          p={{ base: "1.5rem", md: "2rem" }}
          textAlign={{ base: "center", md: "left" }}
        />
        <Button variant="primary" p={{ base: "1.5rem", md: "2rem" }}>
          Get started
        </Button>
      </Stack>
    </VStack>
  );
};
