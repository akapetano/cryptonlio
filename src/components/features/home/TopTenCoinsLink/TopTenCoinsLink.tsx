import { FaCoins, FaArrowDown } from "react-icons/fa";
import { Icon, Text, Flex, useColorModeValue, Link } from "@chakra-ui/react";

export const TopTenCoinsLink = () => {
  const linkColor = useColorModeValue("brand.200", "brand.100");
  const linkHoverColor = useColorModeValue("brand.300", "brand.50");

  return (
    <Link href="#top-10-coins">
      <Flex
        justifyContent="center"
        alignItems="center"
        color={linkColor}
        gap="0.5rem"
        _hover={{
          textDecoration: "underline",
          cursor: "pointer",
          color: linkHoverColor,
        }}
      >
        <Icon as={FaCoins} h={6} w={6} />
        <Text>Go to Top 10 Coins</Text>
      </Flex>
    </Link>
  );
};
