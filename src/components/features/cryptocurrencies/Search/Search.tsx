import { Card } from "../../../core/Card/Card";
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";

interface ISearchProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Search = ({ onChange }: ISearchProps) => {
  const iconColor = useColorModeValue("gray.300", "gray.500");

  return (
    <Card justifyContent="start" alignItems="center" p="1rem">
      <Flex maxWidth={{ base: "container.xs", md: "container.xl" }}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon as={BiSearch} color={iconColor} />
          </InputLeftElement>
          <Input
            width="16rem"
            placeholder="Search a cryptocurrency"
            variant="filled"
            onChange={onChange}
          />
        </InputGroup>
      </Flex>
    </Card>
  );
};
