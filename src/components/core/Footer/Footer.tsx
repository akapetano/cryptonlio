import { Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import { Copyright } from '../Copyright/Copyright';
import { Logo } from '../Logo/Logo';

export const Footer = () => {
  const accentBgColor = useColorModeValue('#204A23', '#419547');
  const bgAndTextColor = useColorModeValue('white', 'gray.800');

  return (
    <Flex
      bg={accentBgColor}
      w="full"
      h="20rem"
      alignItems="center"
      justifyContent="flex-end"
      flexDirection="column"
      mt="2rem"
    >
      <Flex
        w="full"
        h="5rem"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Heading
          as="h3"
          fontSize={{ base: 'xl', md: '2xl' }}
          color={bgAndTextColor}
        >
          Boost your crypto experience with
        </Heading>
      </Flex>
      <Flex
        bg={bgAndTextColor}
        w="full"
        h="15rem"
        alignItems="center"
        justifyContent="end"
        textAlign="center"
        flexDir="column"
        py="5rem"
      >
        <Logo width="100" height="100" />
        <Copyright />
      </Flex>
    </Flex>
  );
};
