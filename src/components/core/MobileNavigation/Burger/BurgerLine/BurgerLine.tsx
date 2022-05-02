import { Box, useColorModeValue } from '@chakra-ui/react';

interface IBurgerLine {
  isOpen: boolean;
}

export const BurgerLine = ({ isOpen }: IBurgerLine) => {
  const lineColor = useColorModeValue('brand.200', 'brand.100');

  return (
    <Box
      width=" 2rem"
      height="0.25rem"
      background={lineColor}
      border-radius="10px"
      transition="all 0.3s ease-in-out"
      position="relative"
      transformOrigin="1px"
      _first={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}
      _even={{
        opacity: isOpen ? '0' : '1',
        transform: isOpen ? 'translateX(20px)' : 'translateX(0)',
      }}
      _last={{ transform: isOpen ? 'rotate(-45deg)' : 'rotate(0)' }}
    />
  );
};
