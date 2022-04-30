import { Container, ContainerProps } from '@chakra-ui/react';

export const LayoutMain = ({ ...restProps }: ContainerProps) => {
  return (
    <Container
      display="flex"
      justifyContent="center"
      alignItems="center"
      maxW={[
        '25rem',
        'container.sm',
        'container.md',
        'container.lg',
        'container.xl',
      ]}
      p={5}
      {...restProps}
    />
  );
};
