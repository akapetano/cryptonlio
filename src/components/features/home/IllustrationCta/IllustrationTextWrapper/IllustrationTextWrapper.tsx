import { Flex, FlexProps, Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IIllustrationTextWrapperProps extends FlexProps {
  illustration: ReactNode;
  text: ReactNode;
  textIsLeft?: boolean;
}

export const IllustrationTextWrapper = ({
  illustration,
  text,
  textIsLeft,
}: IIllustrationTextWrapperProps) => {
  return (
    <Flex
      gap={{ base: "0", md: "2rem" }}
      my={{ base: "5rem", md: "10rem" }}
      mx="4rem"
      justifyContent="center"
      alignItems="center"
      flexDir={{ base: "column", md: textIsLeft ? "row-reverse" : "row" }}
    >
      <Flex maxW={{ base: "25rem", sm: "30rem", md: "40rem" }}>
        {illustration}
      </Flex>
      <Box
        fontWeight={"bold"}
        fontSize={{ base: "2xl", md: "3xl" }}
        textAlign={"center"}
        fontFamily="heading"
      >
        {text}
      </Box>
    </Flex>
  );
};
