import { UserAvatar } from "../../../core/UserAvatar/UserAvatar";
import { Card } from "../../../core/Card/Card";
import { Container, Flex, Text } from "@chakra-ui/react";
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
        <Flex justifyContent="start" alignItems="center" gap="1rem">
          <UserAvatar height={48} width={48} />
          <Text fontWeight="bold">
            {`${user?.user_metadata?.firstName} ${user?.user_metadata?.lastName}`}
            , a fellow Cryptonian
          </Text>
        </Flex>
      </Card>
      <Card>
        <Flex justifyContent="start" alignItems="center" gap="1rem">
          <Text fontWeight="bold" fontSize="2xl">
            My Portfolio
          </Text>
        </Flex>
      </Card>
    </Container>
  );
};
