import { ContentCard } from "../ContentCard/ContentCard";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { Flex, Heading, Box, Text, Button, Collapse } from "@chakra-ui/react";

interface ICoinDescriptionProps {
  description: string | JSX.Element | JSX.Element[];
  readMore: boolean;
  setReadMore: (string: boolean) => void;
}

export const CoinDescription = ({
  description,
  readMore,
  setReadMore,
}: ICoinDescriptionProps) => {
  return (
    <ContentCard>
      <Flex flexDir="column" maxWidth="45rem" mb="2rem">
        <Heading as="h3" fontSize="2xl" mb="1rem">
          Description
        </Heading>
        <Box>
          <Collapse startingHeight={100} in={readMore} animateOpacity>
            <Text whiteSpace="pre-line" mb="1rem">
              {description} {readMore ? "" : " (...)"}
            </Text>
          </Collapse>

          <Button
            onClick={() => (readMore ? setReadMore(false) : setReadMore(true))}
            rightIcon={readMore ? <MdExpandLess /> : <MdExpandMore />}
            size="sm"
            variant="primary"
            mt={readMore ? "" : "1rem"}
          >
            Read {readMore ? "Less" : "More"}
          </Button>
        </Box>
      </Flex>
    </ContentCard>
  );
};
