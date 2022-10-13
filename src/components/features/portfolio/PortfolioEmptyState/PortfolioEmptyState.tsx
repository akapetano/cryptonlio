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
import { useRef, useState } from "react";
FaPlus;

export const PortfolioEmptyState = () => {
  const { user } = useUser();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const linkColor = useColorModeValue("brand.300", "brand.200");
  const [porfolioList, setPortfolioList] = useState([]);
  const portfolioNameRef = useRef(null);

  const onCreatePorfolio = (event: any) => {
    setPortfolioList(
      porfolioList.concat(
        <Card key={porfolioList.length}>{portfolioNameRef.current}</Card>
      )
    );
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
          <Text fontSize="xl">You currently don&apos;t have a porfolio.</Text>
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
        </Flex>
      </Card>
      {porfolioList}
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Portfolio</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="My Porfolio" size="lg" ref={portfolioNameRef} />
          </ModalBody>

          <ModalFooter display="flex" gap="0.5rem" w="full">
            <Button variant="secondary" w="full" onClick={onClose}>
              Close
            </Button>
            <Button variant="primary" w="full" onClick={onClose}>
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
