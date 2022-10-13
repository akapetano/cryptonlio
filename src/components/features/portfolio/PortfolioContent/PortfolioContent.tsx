import { Card } from "../../../core/Card/Card";
import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import { useUser } from "@supabase/auth-helpers-react";
import { PortfolioEmptyState } from "../PortfolioEmptyState/PortfolioEmptyState";

export const PortfolioContent = () => {
  const { user } = useUser();

  return (
    <Container
      display="flex"
      flexDir="column"
      maxWidth={[
        "25rem",
        "container.sm",
        "container.md",
        "container.lg",
        "container.xl",
      ]}
    >
      <Heading as="h4" size="md" m="0" mt="1rem">
        My Portfolio
      </Heading>
      <PortfolioEmptyState />
    </Container>
  );
};
