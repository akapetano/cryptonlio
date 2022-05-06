import { Container, ContainerProps } from '@chakra-ui/react';

export const WelcomeContainer = ({ ...restProps }) => {
  return (
    <Container
      display="flex"
      flexDir={{ base: 'column', md: 'row' }}
      justifyContent={{ base: 'space-evenly', md: 'space-between' }}
      alignItems="start"
      maxW={{ base: 'container.lg', md: 'container.xl' }}
      mt={{ base: '5rem', md: '10rem' }}
      p={5}
      rounded="md"
      height="100vh"
      {...restProps}
    />
  );
};
