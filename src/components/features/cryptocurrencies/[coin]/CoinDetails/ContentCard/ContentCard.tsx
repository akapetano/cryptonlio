import { useColorModeValue, Box, BoxProps } from '@chakra-ui/react';

export const ContentCard = ({ ...restProps }: BoxProps) => {
  const contentCardBorderColor = useColorModeValue('gray.200', 'gray.700');
  return (
    <Box
      p="1rem"
      border="1px solid"
      borderColor={contentCardBorderColor}
      rounded="xl"
      mb="2rem"
      {...restProps}
    />
  );
};
