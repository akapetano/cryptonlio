import {
  Flex,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Box,
  Menu,
  MenuItem,
  Divider,
} from "@chakra-ui/react";
import Image from "next/image";
import { useCrypto } from "../../../../../hooks/useCrypto";
import { Coin } from "../../../../../types/crypto";
import { Search } from "../../../core/Search/Search";

interface IPortfolioListProps {
  portfolioList: string[];
}

export const PortfolioList = ({ portfolioList }: IPortfolioListProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { filteredCoins, search, onChange } = useCrypto();

  return (
    <>
      {portfolioList.map((portfolio) => (
        <Box key={portfolio}>
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontSize="xl">Portfolio Name: {portfolio}</Text>
            <Button variant="primary" onClick={onOpen}>
              Add New Coin
            </Button>
          </Flex>

          <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalBody p="0.5rem">
                <Search
                  placeholder="Search a coin"
                  onChange={onChange}
                  w="full"
                  inputSize="lg"
                />
                {search ? (
                  <Menu>
                    <Divider mt="1rem" />
                    {filteredCoins.map((coin: Coin) => (
                      <MenuItem
                        key={coin.id}
                        _hover={{ bg: "brand.500", color: "white" }}
                        m={0}
                        p="1rem"
                        display="flex"
                        gap="1rem"
                        alignItems="center"
                      >
                        <Image
                          loader={() => coin.image}
                          src={coin.image}
                          alt={coin.name}
                          height="30px"
                          width="30px"
                          unoptimized
                        />
                        <Text>{coin.name}</Text>
                      </MenuItem>
                    ))}
                  </Menu>
                ) : null}
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>
      ))}
    </>
  );
};
