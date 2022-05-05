import { HStack, Button, VStack, Input } from '@chakra-ui/react';

export const GetStartedButton = () => {
  return (
    <VStack spacing="1rem">
      <HStack spacing="1rem">
        <Input placeholder="Email address" variant="filled" p="2rem" />
        <Button variant="primary" p="2rem">
          Get started
        </Button>
      </HStack>
    </VStack>
  );
};
