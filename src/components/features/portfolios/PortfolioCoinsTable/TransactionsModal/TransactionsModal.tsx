import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Text,
  Divider,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";
import { Coin } from "../../../../../../types/crypto";

interface ITransactionsModalProps {
  coin: Coin;
  isOpen: boolean;
  onClose: () => void;
}

export const TransactionsModal = ({
  coin,
  isOpen,
  onClose,
}: ITransactionsModalProps) => {
  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody p="0.5rem">
          <Divider mt="1rem" />
          <Flex justifyContent="between">
            <Text>All Transactions</Text>
            <Image
              loader={() => coin.image}
              src={coin.image}
              alt={coin.name}
              height="30px"
              width="30px"
              unoptimized
            />
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
