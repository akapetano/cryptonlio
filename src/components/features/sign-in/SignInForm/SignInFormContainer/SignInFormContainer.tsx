import { Flex, FlexProps } from "@chakra-ui/react";

export const SignInFormContainer = ({ ...restProps }: FlexProps) => {
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
