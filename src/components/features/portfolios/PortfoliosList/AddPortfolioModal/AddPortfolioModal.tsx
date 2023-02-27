import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  ModalCloseButton,
  ModalBody,
  Input,
} from "@chakra-ui/react";
import { ChangeEvent } from "react";

interface IAddPortfolioModalProps {
  portfolioName: string;
  handleChange: (event: ChangeEvent) => void;
  onCreatePortfolio: () => void;
  onClose: () => void;
  isOpen: boolean;
}

export const AddPortfolioModal = ({
  portfolioName,
  handleChange,
  onCreatePortfolio,
  isOpen,
  onClose,
}: IAddPortfolioModalProps) => {
  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>New Portfolio</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            placeholder="My Porfolio"
            size="lg"
            type="text"
            value={portfolioName}
            onChange={handleChange}
          />
        </ModalBody>

        <ModalFooter display="flex" gap="0.5rem" w="full">
          <Button variant="secondary" w="full" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" w="full" onClick={onCreatePortfolio}>
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
