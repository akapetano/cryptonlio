import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  ModalCloseButton,
  ModalBody,
  Text,
} from "@chakra-ui/react";
import { ChangeEvent } from "react";

interface IAddPortfolioModalProps {
  portfolioId: string;
  portfolioName: string;
  onDeletePortfolio: (portfolioIdToUpdate: string, onClose: () => void) => void;
  onClose: () => void;
  isOpen: boolean;
}

export const DeletePortfolioModal = ({
  portfolioId,
  portfolioName,
  onDeletePortfolio,
  isOpen,
  onClose,
}: IAddPortfolioModalProps) => {
  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{`Are you sure you want to delete your portfolio "${portfolioName}"?`}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Please note that this action is irreversible.</Text>
        </ModalBody>

        <ModalFooter display="flex" gap="0.5rem" w="full">
          <Button variant="secondary" w="full" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="danger-primary"
            w="full"
            onClick={() => onDeletePortfolio(portfolioId, onClose)}
          >
            Delete Portfolio
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
