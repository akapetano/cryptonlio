import { Flex, Icon, Text, Button } from "@chakra-ui/react";
import { BlankCanvasIllustration } from "../../../core/Illustrations/BlankCanvasIllustration/BlankCanvasIllustration";
import { BiBookAdd } from "react-icons/bi";

interface IPortfolioEmptyStateProps {
  message: string;
  portfolioList: string[];
  onOpen: () => void;
}

export const PortfolioEmptyState = ({
  message,
  portfolioList,
  onOpen,
}: IPortfolioEmptyStateProps) => {
  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      fontSize="xl"
      textAlign="center"
    >
      <Text mt="2rem" fontSize={{ base: "lg", md: "xl" }}>
        {message}
      </Text>
      {portfolioList.length === 0 ? (
        <Button
          variant="primary"
          leftIcon={<Icon as={BiBookAdd} />}
          onClick={onOpen}
          p="0.5rem 1rem"
          mt="2rem"
          mb={{ base: "-10rem", md: "-5rem" }}
        >
          Create Portfolio
        </Button>
      ) : null}
      <Flex
        maxW={{ base: "10rem", sm: "15rem", md: "20rem" }}
        mb={{ base: "-10rem", sm: "-5rem" }}
      >
        <BlankCanvasIllustration />
      </Flex>
    </Flex>
  );
};
