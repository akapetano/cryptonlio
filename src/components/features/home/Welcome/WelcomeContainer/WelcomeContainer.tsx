import { Container, ContainerProps } from "@chakra-ui/react";

export const WelcomeContainer = ({ ...restProps }) => {
  return (
    <Container
      display="flex"
      flexDir={{ base: "column-reverse", md: "row" }}
      gap="6rem"
      justifyContent={{ base: "center", md: "space-between" }}
      alignItems={{ base: "center", md: "start" }}
      maxW={{ base: "container.lg", md: "container.xl" }}
      mt={{ base: "0", md: "10rem" }}
      p={5}
      rounded="md"
      {...restProps}
    />
  );
};
