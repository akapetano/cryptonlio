import { Container, ContainerProps } from "@chakra-ui/react";

export const WelcomeContainer = ({ ...restProps }) => {
  return (
    <Container
      display="flex"
      flexDir={{ base: "column-reverse", md: "row" }}
      gap={{ base: "2rem", md: "6rem" }}
      justifyContent={{ base: "center", md: "space-between" }}
      alignItems={{ base: "center", md: "start" }}
      maxW={{ base: "container.lg", md: "container.xl" }}
      mt={{ base: "2.5rem", md: "10rem" }}
      p={5}
      rounded="md"
      {...restProps}
    />
  );
};
