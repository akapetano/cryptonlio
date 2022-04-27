import { Heading } from '@chakra-ui/react';

export const WelcomeText = () => {
  return (
    <Heading
      fontSize={['2xl', '3xl', '4xl', '5xl', '5xl']}
      textAlign="center"
      letterSpacing="1px"
    >
      Your Crypto <br /> Exploration Starts Here. <br /> Create Your Portfolio{' '}
      <br /> With Ease.
    </Heading>
  );
};
