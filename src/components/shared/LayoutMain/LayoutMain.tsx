import { Box, BoxProps } from '@chakra-ui/react';

export const LayoutMain = ({ children, ...restProps }: BoxProps) => {
  return (
    <Box {...restProps}>
      <main>{children}</main>
    </Box>
  );
};
