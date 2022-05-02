import { CryptoCard } from '../../../core/CryptoCard/CryptoCard';
import { WelcomeContainer } from './WelcomeContainer/WelcomeContainer';
import { WelcomeText } from './WelcomeText/WelcomeText';
import { Button } from '@chakra-ui/react';

export const Welcome = () => {
  return (
    <WelcomeContainer mt="-10rem">
      <WelcomeText />
      <CryptoCard />
    </WelcomeContainer>
  );
};
