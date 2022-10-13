import { UserAvatar } from "../../../core/UserAvatar/UserAvatar";
import { Card } from "../../../core/Card/Card";
import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import { useUser } from "@supabase/auth-helpers-react";

export const PortfolioUserHeader = () => {
  const { user } = useUser();

  return (
    <Container
      display="flex"
      gap="2rem"
      maxWidth={[
        "25rem",
        "container.sm",
        "container.md",
        "container.lg",
        "container.xl",
      ]}
    >
      <Card>
        <Flex justifyContent="start" alignItems="start" gap="1rem">
          <Heading as="h4" size="md">
            My Portfolio
          </Heading>
        </Flex>
      </Card>
    </Container>
  );
};
