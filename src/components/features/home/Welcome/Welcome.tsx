import { CryptoCard } from "../../../core/CryptoCard/CryptoCard";
import { WelcomeContainer } from "./WelcomeContainer/WelcomeContainer";
import { WelcomeText } from "./WelcomeText/WelcomeText";
import { VStack } from "@chakra-ui/react";
import { GetStartedButton } from "./GetStartedButton/GetStartedButton";
import { TopTenCoinsLink } from "../TopTenCoinsLink/TopTenCoinsLink";

export const Welcome = () => {
  return (
    <WelcomeContainer>
      <VStack spacing="2rem">
        <TopTenCoinsLink />
        <WelcomeText />
        <GetStartedButton />
      </VStack>
      <CryptoCard />
    </WelcomeContainer>
  );
};
