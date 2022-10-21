import {
  Flex,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
} from "@chakra-ui/react";
import { useCrypto } from "../../../../../hooks/useCrypto";
import { useSearch } from "../../../../../hooks/useSearch";
import { Search } from "../../../core/Search/Search";

interface IPortfolioListProps {
  portfolioList: string[];
}

export const PortfolioList = ({ portfolioList }: IPortfolioListProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { filteredCoins, onChange } = useCrypto();

  return (
    <Flex gap="1rem">
      {portfolioList.map((portfolio) => (
        <Flex key={portfolio} p="5rem" py="2rem" flexDir="column">
          <Text fontSize="2xl">{portfolio}</Text>
          <Button variant="primary" onClick={onOpen}>
            Add Coin
          </Button>

          <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{portfolio}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Search
                  placeholder="Search your favorite coin"
                  onChange={onChange}
                />
              </ModalBody>

              <ModalFooter display="flex" gap="0.5rem" w="full">
                <Button variant="secondary" w="full" onClick={onClose}>
                  Close
                </Button>
                <Button variant="primary" w="full" onClick={onClose}>
                  Add New Coin
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      ))}
    </Flex>
  );
};
