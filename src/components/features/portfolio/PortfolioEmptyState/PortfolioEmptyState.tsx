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
import { ChangeEvent } from "react";
import { PortfolioList } from "../PortfolioList/PortfolioList";
import { usePortfolio } from "../../../../../hooks/usePortfolio";
import { StatCard } from "../StatCard/StatCard";

export const PortfolioEmptyState = () => {
  const { user } = useUser();
  const { isOpen, onOpen, onClose } = useDisclosure();
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
    <Box>
      <Flex gap="1rem" justifyContent="space-between">
        <Flex gap="1rem" flexBasis="50%">
          <StatCard statTitle="Total Amount" amount={500.0} />
          <StatCard
            statTitle="24h Portfolio Change"
            amount={10}
            percentage={2.56}
          />
          <StatCard
            statTitle="Total Profit Gain"
            amount={1000}
            percentage={100}
          />
        </Flex>
        <Button
          variant="primary"
          leftIcon={<Icon as={FaPlus} />}
          onClick={onOpen}
          flexBasis="20%"
          mt="3rem"
        >
          Create Portfolio
        </Button>
      </Flex>
      <Card p="1rem" mt="1rem" mb="20rem">
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
    </Box>
  );
};
