import { Card } from "../../../core/Card/Card";
import { Flex, Text, Box } from "@chakra-ui/react";

interface IStatCardProps {
  statTitle: string;
  amount: number;
  percentage?: number;
}

export const StatCard = ({ statTitle, amount, percentage }: IStatCardProps) => {
  return (
    <Card p="1rem" minW="max-content">
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        textAlign="center"
      >
        <Text fontWeight="500" fontSize="lg" m={0}>
          ${amount.toFixed(2)}
        </Text>
        <Box fontSize="sm" w="fit-content">
          <Text fontWeight="400" m={0} display="inline">
            {statTitle}{" "}
          </Text>
          {percentage ? (
            <Text color="brand.50" m={0} display="inline">
              (+{percentage.toFixed(2)}%)
            </Text>
          ) : null}
        </Box>
      </Flex>
    </Card>
  );
};
