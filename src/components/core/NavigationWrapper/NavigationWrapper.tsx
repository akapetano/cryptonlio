import { Flex, FlexProps, useColorModeValue } from '@chakra-ui/react';

export const NavigationWrapper = ({ ...restProps }: FlexProps) => {
  return (
    <Flex
      h={28}
      alignItems={'center'}
      justifyContent={'space-around'}
      bg={useColorModeValue('white', 'gray.800')}
      height="6rem"
      boxShadow={useColorModeValue(
        '0 1px 6px -1px rgba(0, 0, 0, .2)',
        '0 1px 6px 1px rgba(255, 255, 255, .05)'
      )}
      width="100%"
      {...restProps}
    />
  );
};
