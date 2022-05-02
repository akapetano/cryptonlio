import { VStack, Heading } from '@chakra-ui/react';
import { TopTenCoinsLink } from '../../TopTenCoinsLink/TopTenCoinsLink';

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
    </VStack>
  );
};
