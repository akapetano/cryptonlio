import { Card } from "../Card/Card";
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
  placeholder: string;
}

export const Search = ({ onChange, placeholder }: ISearchProps) => {
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
            placeholder={placeholder}
            variant="filled"
            onChange={onChange}
          />
        </InputGroup>
      </Flex>
    </Card>
  );
};
