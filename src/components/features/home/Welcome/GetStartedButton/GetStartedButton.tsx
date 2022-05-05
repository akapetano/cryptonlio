import { Stack, Button, VStack, Input } from '@chakra-ui/react';

export const GetStartedButton = () => {
  return (
    <VStack spacing="1rem">
      <Stack spacing="1rem" direction={{ base: 'column', md: 'row' }}>
        <Input
          placeholder="Email address"
          variant="filled"
          p="2rem"
          textAlign={{ base: 'center', md: 'left' }}
        />
        <Button variant="primary" p="2rem">
          Get started
        </Button>
      </Stack>
    </VStack>
  );
};
