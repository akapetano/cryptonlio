import { Flex } from "@chakra-ui/react";
import { StatCard } from "../../StatCard/StatCard";

export const PortfolioStats = () => {
  return (
    <Flex
      flexDir={{ base: "column", md: "row" }}
      gap={{ base: "1rem", md: "1rem" }}
      flexBasis="50%"
    >
      <StatCard statTitle="Total Amount" amount={500.0} />
      <StatCard
        statTitle="24h Portfolio Change"
        amount={10}
        percentage={2.56}
      />
      <StatCard statTitle="Total Profit Gain" amount={1000} percentage={100} />
    </Flex>
  );
};
