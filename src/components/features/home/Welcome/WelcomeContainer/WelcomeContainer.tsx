import { Container, ContainerProps } from '@chakra-ui/react';

export const WelcomeContainer = ({ ...restProps }) => {
  return (
    <Container
      m="3rem auto 3rem auto"
      display="flex"
      flexDir={{ base: 'column', md: 'row' }}
      justifyContent="space-between"
      alignItems="center"
      maxW={{ base: 'container.lg', md: 'container.xl' }}
      p={5}
      rounded="md"
      {...restProps}
    />
  );
};
