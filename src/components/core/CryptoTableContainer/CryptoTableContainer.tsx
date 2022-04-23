import { Container, ContainerProps, useColorModeValue } from '@chakra-ui/react';

export const CryptoTableContainer = ({ ...restProps }: ContainerProps) => {
  const containerBorderColor = useColorModeValue('#E2E8F0', '#2D3748');

  return (
    <Container
      mt="1.5rem"
      display="flex"
      justifyContent="center"
      alignItems="center"
      maxW="container.xl"
      p={5}
      border={`1px solid ${containerBorderColor}`}
      rounded="md"
      boxShadow={useColorModeValue(
        '0 1px 16px -1px rgba(0, 0, 0, .2)',
        '0 1px 16px 1px rgba(255, 255, 255, .05)'
      )}
      {...restProps}
    />
  );
};
