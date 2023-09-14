import { Flex, FlexProps, useColorModeValue } from "@chakra-ui/react";

export const NavigationWrapper = ({ ...restProps }: FlexProps) => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={{ base: "space-between", md: "space-around" }}
      bg={useColorModeValue("white", "gray.800")}
      height={{ base: "4rem", md: "6rem" }}
      boxShadow={useColorModeValue(
        "0 1px 6px -1px rgba(0, 0, 0, .2)",
        "0 1px 6px 1px rgba(255, 255, 255, .05)"
      )}
      width="100%"
      {...restProps}
    />
  );
};
