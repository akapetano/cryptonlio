import { CryptoCard } from "../../../core/CryptoCard/CryptoCard";
import { WelcomeContainer } from "./WelcomeContainer/WelcomeContainer";
import { WelcomeText } from "./WelcomeText/WelcomeText";
import { VStack } from "@chakra-ui/react";
import { GetStartedButton } from "./GetStartedButton/GetStartedButton";
import { TopTenCoinsLink } from "../TopTenCoinsLink/TopTenCoinsLink";
import { useUser } from "@supabase/auth-helpers-react";

export const Welcome = () => {
  const { user } = useUser();

  return (
    <WelcomeContainer>
      <VStack spacing="2rem">
        <TopTenCoinsLink />
        <WelcomeText />
        {!user ? <GetStartedButton /> : null}
      </VStack>
      <CryptoCard />
    </WelcomeContainer>
  );
};
