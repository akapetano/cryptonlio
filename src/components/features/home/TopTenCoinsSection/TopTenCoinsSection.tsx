import { Flex, FlexProps } from '@chakra-ui/react';

export const TopTenCoinsSection = ({ ...restProps }: FlexProps) => {
  return (
    <Flex
      as="section"
      py={[0, 10, 20]}
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      {...restProps}
    />
  );
};
