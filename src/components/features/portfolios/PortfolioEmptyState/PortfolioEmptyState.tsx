import { Flex, Text } from "@chakra-ui/react";
import { CoinBag } from "../../../core/Icons/CoinBag";

interface IPortfolioEmptyStateProps {
  message: string;
}

export const PortfolioEmptyState = ({ message }: IPortfolioEmptyStateProps) => {
  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      fontSize="xl"
      textAlign="center"
      gap="1rem"
      my="4rem"
    >
      <CoinBag width="75" height="75" />
      <Text fontSize={{ base: "md", md: "lg" }}>
        You currently don&apos;t have a porfolio.
      </Text>
    </Flex>
  );
};
