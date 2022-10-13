import {
  Flex,
  Text,
  Heading,
  HStack,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { Copyright } from "../Copyright/Copyright";
import { Logo } from "../Logo/Logo";
import { IoIosRocket } from "react-icons/io";
import { CoingeckoLogo } from "../CoingeckoLogo/CoingeckoLogo";

export const Footer = () => {
  const accentBgColor = useColorModeValue("brand.300", "brand.200");
  const bgAndTextColor = useColorModeValue("white", "gray.800");
  const poweredByTextColor = useColorModeValue("gray.400", "gray.600");

  return (
    <Flex
      bg={accentBgColor}
      w="full"
      alignItems="center"
      justifyContent="flex-end"
      flexDirection="column"
    >
      <Flex
        alignItems="center"
        p="2rem"
        flexDir={{ base: "column", md: "row" }}
        justifyContent="center"
        textAlign="center"
        color={bgAndTextColor}
        gap="1rem"
      >
        <Icon as={IoIosRocket} w={8} h={8} />
        <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }}>
          Boost your crypto experience with
        </Heading>
      </Flex>
      <Flex
        bg={bgAndTextColor}
        w="full"
        alignItems="center"
        justifyContent="end"
        textAlign="center"
        flexDir="column"
        pt="1.5rem"
        pb="3rem"
      >
        <Logo width="100" height="100" />
        <Flex
          justifyContent="center"
          alignItems="center"
          gap="0.5rem"
          mb="1rem"
        >
          <Text color={poweredByTextColor}>Powered by</Text>
          <CoingeckoLogo width="30" height="30" />
        </Flex>
        <Copyright />
      </Flex>
    </Flex>
  );
};
