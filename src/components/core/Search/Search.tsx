import { Card } from "../Card/Card";
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  useColorModeValue,
  InputGroupProps,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";

interface ISearchProps extends InputGroupProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  inputSize?: string;
  inputVariant?: string;
}

export const Search = ({
  onChange,
  placeholder,
  inputVariant,
  inputSize,
  ...restProps
}: ISearchProps) => {
  const iconColor = useColorModeValue("gray.300", "gray.500");

  return (
    <InputGroup display="flex" alignItems="center" {...restProps}>
      <InputLeftElement pointerEvents="none">
        <Icon as={BiSearch} color={iconColor} />
      </InputLeftElement>
      <Input
        width="full"
        placeholder={placeholder}
        variant={inputVariant ? inputVariant : "filled"}
        onChange={onChange}
        size={inputSize}
      />
    </InputGroup>
  );
};
