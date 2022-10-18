import { Flex, Text, Button } from "@chakra-ui/react";
import { Card } from "../../../core/Card/Card";

interface IPortfolioListProps {
  portfolioList: string[];
}

export const PortfolioList = ({ portfolioList }: IPortfolioListProps) => {
  return (
    <Flex gap="1rem">
      {portfolioList.map((portfolio) => (
        <Card key={portfolio} p="5rem" py="2rem" flexDir="column">
          <Text fontSize="2xl">{portfolio}</Text>
          <Button variant="primary">Add Coin</Button>
        </Card>
      ))}
    </Flex>
  );
};
