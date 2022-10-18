import { Card } from "../../../core/Card/Card";
import {
  Icon,
  Flex,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  ModalBody,
  Button,
  Box,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import { useUser } from "@supabase/auth-helpers-react";
import { FaPlus } from "react-icons/fa";
import { ChangeEvent, useState } from "react";
import { PortfolioList } from "../PortfolioList/PortfolioList";
import { usePortfolio } from "../../../../../hooks/usePortfolio";

export const PortfolioEmptyState = () => {
  const { user } = useUser();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const linkColor = useColorModeValue("brand.300", "brand.200");
  const { portfolioName, setPortfolioName, portfolioList, setPortfolioList } =
    usePortfolio();

  function handleChange(event: ChangeEvent) {
    const eventTarget = event.target as HTMLInputElement;
    setPortfolioName(eventTarget.value);
  }

  const onCreatePortfolio = () => {
    setPortfolioList((prevState) => {
      return [...prevState, portfolioName];
    });
    onClose();
  };

  return (
    <>
      <Card p="1rem" mt="1rem" mb="2rem">
        <Flex
          justifyContent="center"
          alignItems="center"
          gap="1rem"
          flexDirection="column"
        >
          {portfolioList.length === 0 ? (
            <Text fontSize="xl">You currently don&apos;t have a porfolio.</Text>
          ) : (
            portfolioList
          )}
          <Box
            onClick={onOpen}
            _hover={{
              cursor: "pointer",
              color: linkColor,
              textDecoration: "underline",
            }}
          >
            <Flex justifyContent="center" alignItems="center" gap="0.5rem">
              <Icon as={FaPlus} width={5} height={5} />
              <Text>Create Portfolio</Text>
            </Flex>
          </Box>
          {portfolioList.length !== 0 ? (
            <PortfolioList portfolioList={portfolioList} />
          ) : null}
        </Flex>
      </Card>

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
    </>
  );
};
