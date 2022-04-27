import { Flex, Icon, Box, Text, useColorModeValue } from '@chakra-ui/react';
import { BsInfoCircle } from 'react-icons/bs';
import { SiEthereum } from 'react-icons/si';

export const CryptoCard = () => {
  const cryptoCardBoxShadow = useColorModeValue(
    '0 2px 32px 0 rgba(96, 173, 101, .7)',
    '0 2px 32px 0 rgba(46, 204, 113, .4)'
  );

  return (
    <Flex
      p={3}
      my={5}
      h={{ base: 150, md: 200 }}
      w={{ base: 280, md: 380 }}
      justifyContent="end"
      alignItems="start"
      flexDir="column"
      rounded="xl"
      bg="#27ae60"
      backgroundImage="radial-gradient(
        at 83% 67%,
        rgba(46, 204, 113, .3) ,
        transparent 58%
      ),
      radial-gradient(at 67% 20%, hsla(123, 32%, 35%, 1) 0, transparent 89%),
      radial-gradient(at 88% 35%, hsla(123, 39%, 33%, 1) 0, transparent 80%),
      radial-gradient(at 31% 91%, hsla(123, 39%, 31%, 1) 0, transparent 82%),
      radial-gradient(at 27% 71%, hsla(123, 39%, 30%, 1) 0, transparent 59%),
      radial-gradient(at 74% 89%, hsla(124, 40%, 23%, 1) 0, transparent 41%),
      radial-gradient(at 53% 95%, hsla(124, 40%, 25%, 1) 0, transparent 10%);
  "
      boxShadow={cryptoCardBoxShadow}
    >
      <Flex justifyContent="space-between" flexDir="column" w="full" h="full">
        <Flex justifyContent="space-between" alignItems="start">
          <Flex
            w={10}
            h={10}
            rounded="full"
            border="2px solid white"
            justifyContent="center"
            alignItems="center"
          >
            <Icon as={SiEthereum} fontSize={21} color="#fff" />
          </Flex>
          <Icon as={BsInfoCircle} fontSize={17} color="#fff" />
        </Flex>
        <Box>
          <Text color="white" fontWeight="light" fontSize="sm" opacity="0.9">
            Address
          </Text>
          <Text color="white" fontWeight="semi-bold" fontSize="xl" mt={1}>
            Blockchain
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};
