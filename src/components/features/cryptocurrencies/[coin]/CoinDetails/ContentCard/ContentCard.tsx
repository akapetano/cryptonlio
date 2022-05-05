import { useColorModeValue, Box, FlexProps, Flex } from '@chakra-ui/react';

export const ContentCard = ({ ...restProps }: FlexProps) => {
  const contentCardBorderColor = useColorModeValue('gray.200', 'gray.700');
  return (
    <Flex
      p="1rem"
      border="1px solid"
      borderColor={contentCardBorderColor}
      rounded="xl"
      mb="2rem"
      width="45rem"
      maxWidth={{ base: 'container.xs', md: 'container.xl' }}
      flexDir="column"
      {...restProps}
    />
  );
};
