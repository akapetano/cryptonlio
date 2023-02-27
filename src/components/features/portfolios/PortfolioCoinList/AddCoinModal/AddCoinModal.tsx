import { Coin } from "../../../../../../types/crypto";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Menu,
  Divider,
  MenuItem,
  Text,
} from "@chakra-ui/react";
import { Search } from "../../../../core/Search/Search";
import Image from "next/image";
import { ChangeEvent } from "react";

interface IAddCoinModalProps {
  filteredCoins: Coin[];
  search: string;
  isOpen: boolean;
  onClose: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onAddCoinToPortfolio: (coinId: string) => string;
}

export const AddCoinModal = ({
  filteredCoins,
  search,
  isOpen,
  onClose,
  onChange,
  onAddCoinToPortfolio,
}: IAddCoinModalProps) => {
  return (
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

          <Menu>
            <Divider mt="1rem" />
            {search && filteredCoins
              ? filteredCoins.map((coin: Coin) => (
                  <MenuItem
                    key={coin.id}
                    _hover={{ bg: "brand.500", color: "white" }}
                    m={0}
                    p="1rem"
                    display="flex"
                    gap="1rem"
                    alignItems="center"
                    onClick={() => {
                      onAddCoinToPortfolio(coin.id);
                      onClose();
                    }}
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
                ))
              : filteredCoins?.slice(0, 10).map((coin: Coin) => (
                  <MenuItem
                    key={coin.id}
                    _hover={{ bg: "brand.500", color: "white" }}
                    m={0}
                    p="1rem"
                    display="flex"
                    gap="1rem"
                    alignItems="center"
                    onClick={() => {
                      onAddCoinToPortfolio(coin.id);
                      onClose();
                    }}
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
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
