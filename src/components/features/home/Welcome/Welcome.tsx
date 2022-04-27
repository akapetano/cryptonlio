import { CryptoCard } from '../../../core/CryptoCard/CryptoCard';
import { WelcomeContainer } from './WelcomeContainer/WelcomeContainer';
import { WelcomeText } from './WelcomeText/WelcomeText';

export const Welcome = () => {
  return (
    <WelcomeContainer>
      <WelcomeText />
      <CryptoCard />
    </WelcomeContainer>
  );
};
