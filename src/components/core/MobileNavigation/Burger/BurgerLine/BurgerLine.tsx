import { Box, useColorModeValue } from "@chakra-ui/react";

interface IBurgerLine {
  isopen: boolean | undefined;
}

export const BurgerLine = ({ isopen }: IBurgerLine) => {
  const lineColor = useColorModeValue("#204A23", "#419547");

  return (
    <Box
      width=" 2rem"
      height="0.25rem"
      background={lineColor}
      border-radius="10px"
      transition="all 0.3s ease-in-out"
      position="relative"
      transformOrigin="1px"
      _first={{ transform: isopen ? "rotate(45deg)" : "rotate(0)" }}
      _even={{
        opacity: isopen ? "0" : "1",
        transform: isopen ? "translateX(20px)" : "translateX(0)",
      }}
      _last={{ transform: isopen ? "rotate(-45deg)" : "rotate(0)" }}
    />
  );
};
