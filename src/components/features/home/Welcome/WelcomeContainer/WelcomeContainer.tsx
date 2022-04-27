import { Container, ContainerProps } from '@chakra-ui/react';

export const WelcomeContainer = ({ ...restProps }) => {
  return (
    <Container
      m="3rem auto 3rem auto"
      display="flex"
      justifyContent="center"
      alignItems="center"
      maxW="container.xl"
      p={5}
      rounded="md"
      {...restProps}
    />
  );
};
