import { Text, Link, useColorModeValue } from '@chakra-ui/react';

export const Copyright = () => {
  const textColor = useColorModeValue('gray.400', 'gray.600');

  return (
    <Text color={textColor}>
      © 2022 Copyright by{' '}
      <Link href="https://www.andrijakapetanovic.com/" target="_blank">
        Andrija Kapetanović
      </Link>
    </Text>
  );
};
