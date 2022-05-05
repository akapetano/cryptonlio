import { Card } from '../../../core/Card/Card';
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { BiSearch } from 'react-icons/bi';

export const Search = () => {
  const iconColor = useColorModeValue('gray.300', 'gray.500');

  return (
    <Card
      justifyContent={{ base: 'center', md: 'start' }}
      alignItems="center"
      p="1rem"
    >
      <Flex maxWidth={{ base: 'container.xs', md: 'container.xl' }}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon as={BiSearch} color={iconColor} />
          </InputLeftElement>
          <Input
            width="full"
            placeholder="Search a cryptocurrency"
            variant="filled"
            // onChange={handleChange}
          />
        </InputGroup>
      </Flex>
    </Card>
  );
};
