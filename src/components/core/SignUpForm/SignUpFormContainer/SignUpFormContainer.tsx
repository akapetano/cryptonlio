import { Flex, FlexProps, useColorModeValue } from '@chakra-ui/react';

export const SignUpFormContainer = ({ ...restProps }: FlexProps) => {
  const bgColor = useColorModeValue('brand.200', 'brand.100');

  return (
    <Flex
      bg={bgColor}
      h={{ base: 'auto', md: '100vh' }}
      justifyContent="center"
      alignItems="center"
      py={[0, 10, 20]}
      direction={{ base: 'column-reverse', md: 'row' }}
      {...restProps}
    />
  );
};
