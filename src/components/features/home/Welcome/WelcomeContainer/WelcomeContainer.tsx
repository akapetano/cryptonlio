import { Container, ContainerProps } from '@chakra-ui/react';

export const WelcomeContainer = ({ ...restProps }) => {
  return (
    <Container
      display="flex"
      flexDir={{ base: 'column', md: 'row' }}
      justifyContent={{ base: 'space-evenly', md: 'space-between' }}
      alignItems="center"
      maxW={{ base: 'container.lg', md: 'container.xl' }}
      p={5}
      rounded="md"
      height="100vh"
      {...restProps}
    />
  );
};
