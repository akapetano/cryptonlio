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
import { BiBookAdd } from "react-icons/bi";
import { ChangeEvent } from "react";
import { PortfolioCoinList } from "../PortfolioCoinList/PortfolioCoinList";
import { usePortfolio } from "../../../../../hooks/usePortfolio";
import { StatCard } from "../StatCard/StatCard";
import { PortfolioEmptyState } from "../PortfolioEmptyState/PortfolioEmptyState";

export const PortfoliosList = () => {
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
      const name = portfolioName === "" ? "My Portfolio" : portfolioName;
      return [...prevState, name];
    });
    onClose();
  };

  return (
    <Box mt="2rem">
      <Flex
        flexDir={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ md: "flex-start" }}
      >
        <Flex
          flexDir={{ base: "column", md: "row" }}
          gap={{ base: "1rem", md: "1rem" }}
          flexBasis="50%"
        >
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
          leftIcon={<Icon as={BiBookAdd} />}
          onClick={onOpen}
          mt={{ base: "3rem", md: "0" }}
          p="0.5rem"
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
          {portfolioList.length !== 0 ? (
            <PortfolioCoinList portfolioList={portfolioList} />
          ) : (
            <PortfolioEmptyState message="You currently don't have a porfolio." />
          )}
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
