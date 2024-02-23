import { Flex, FlexProps } from "@chakra-ui/react";

export const LoginFormContainer = ({ ...restProps }: FlexProps) => {
  return (
    <Flex
      h="screen"
      justifyContent="center"
      alignItems="center"
      py={[0, 10, 20]}
      direction={{ base: "column-reverse", md: "row" }}
      {...restProps}
    />
  );
};
