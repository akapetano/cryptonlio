import { Container, Heading } from "@chakra-ui/react";
import { useUser } from "@supabase/auth-helpers-react";
import { PortfoliosList } from "../PortfoliosList/PortfoliosList";

export const PortfolioContent = () => {
  const { user } = useUser();

  return (
    <Container
      maxWidth={[
        "25rem",
        "container.sm",
        "container.md",
        "container.lg",
        "container.xl",
      ]}
    >
      <Heading as="h4" size="md" m="0" mt="1rem">
        My Portfolios
      </Heading>
      <PortfoliosList />
    </Container>
  );
};
