import {
  Container,
  TableContainerProps,
  useColorModeValue,
} from "@chakra-ui/react";

export const Card = ({ ...restProps }: TableContainerProps) => {
  const containerBorderColor = useColorModeValue("#E2E8F0", "#2D3748");
  const containerBoxShadow = useColorModeValue(
    "0 1px 16px -1px rgba(0, 0, 0, .2)",
    "0 1px 16px 1px rgba(255, 255, 255, .05)"
  );

  return (
    <Container
      display="flex"
      justifyContent="center"
      alignItems="center"
      maxWidth={[
        "25rem",
        "container.sm",
        "container.md",
        "container.lg",
        "container.xl",
      ]}
      p={"1rem 0"}
      border={`1px solid ${containerBorderColor}`}
      rounded="md"
      boxShadow={containerBoxShadow}
      {...restProps}
    />
  );
};
