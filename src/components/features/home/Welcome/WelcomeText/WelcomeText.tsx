import { VStack, Heading, Button, HStack } from '@chakra-ui/react';
import NextLink from 'next/link';

export const WelcomeText = () => {
  return (
    <VStack spacing="1rem">
      <Heading
        as="h2"
        fontSize={['2xl', '3xl', '4xl', '5xl', '5xl']}
        textAlign="center"
        letterSpacing="1px"
      >
        Your Crypto <br /> Exploration Starts Here.
      </Heading>
      <Heading
        as="h3"
        fontSize={['md', 'lg', 'xl', '2xl', '2xl']}
        textAlign="center"
        letterSpacing="1px"
      >
        Create Your Portfolio <br /> With Ease.
      </Heading>
      <HStack>
        <Button variant="primary">Get started</Button>
        <NextLink href={'#top-10-coins'} passHref>
          <Button variant="secondary">Top 10 Coins</Button>
        </NextLink>
      </HStack>
    </VStack>
  );
};
