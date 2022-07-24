import { Flex, FlexProps, useColorModeValue } from "@chakra-ui/react";

export const SignUpFormContainer = ({ ...restProps }: FlexProps) => {
  return (
    <Flex
      h={{ base: "auto", md: "100vh" }}
      justifyContent="center"
      alignItems="center"
      py={[0, 10, 20]}
      direction={{ base: "column-reverse", md: "row" }}
      {...restProps}
    />
  );
};
