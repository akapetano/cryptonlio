import {
  Flex,
  Heading,
  HStack,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { Copyright } from "../Copyright/Copyright";
import { Logo } from "../Logo/Logo";
import { IoIosRocket } from "react-icons/io";

export const Footer = () => {
  const accentBgColor = useColorModeValue("#204A23", "#419547");
  const bgAndTextColor = useColorModeValue("white", "gray.800");

  return (
    <Flex
      bg={accentBgColor}
      w="full"
      h="20rem"
      alignItems="center"
      justifyContent="flex-end"
      flexDirection="column"
    >
      <HStack
        h="5rem"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        color={bgAndTextColor}
        spacing="1rem"
      >
        <Icon as={IoIosRocket} w={8} h={8} />
        <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }}>
          Boost your crypto experience with
        </Heading>
      </HStack>
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
