import {
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  MenuDivider,
  MenuItem,
  Flex,
  Text,
  Icon,
  Badge,
  MenuProps,
} from "@chakra-ui/react";
import { BiChevronDown, BiChevronUp, BiBookAdd } from "react-icons/bi";
import { Portfolio } from "../../../../../../types/portfolio";
import { MouseEvent } from "react";

interface IPortfolioMenuProps {
  activePortfolio: Portfolio | null | undefined;
  portfolioList: Portfolio[] | null;
  isOpen: boolean;
  handleActivePortfolioChange: (event: MouseEvent<HTMLButtonElement>) => void;
  onAddPortfolioModalOpen: () => void;
}

export const PortfolioMenu = ({
  activePortfolio,
  portfolioList,
  isOpen,
  handleActivePortfolioChange,
  onAddPortfolioModalOpen,
}: IPortfolioMenuProps) => {
  return (
    <Menu>
      <MenuButton fontWeight={"bold"} fontSize="lg">
        <Flex gap="0.2rem" justifyContent={"center"} alignItems={"center"}>
          <Text>{activePortfolio?.portfolioName}</Text>
          <Icon as={isOpen ? BiChevronUp : BiChevronDown} />
        </Flex>
      </MenuButton>
      <MenuList p="0">
        <MenuOptionGroup type="radio">
          {portfolioList && portfolioList.length
            ? portfolioList.map(({ portfolioName }, index) => (
                <MenuItemOption
                  key={portfolioName}
                  display="flex"
                  justifyContent="start"
                  alignItems="center"
                  gap="0.5rem"
                  py="0.7rem"
                  value={portfolioName}
                  onClick={handleActivePortfolioChange}
                >
                  <Text>{portfolioName}</Text>
                  {activePortfolio?.portfolioName === portfolioName ? (
                    <Badge variant="solid" colorScheme="green" rounded="xl">
                      Main
                    </Badge>
                  ) : null}
                </MenuItemOption>
              ))
            : null}
        </MenuOptionGroup>
        <MenuDivider m="0" />
        <MenuItem
          py="1rem"
          _hover={{
            bg: "brand.200",
            roundedBottom: "md",
            textColor: "#fff",
          }}
          onClick={onAddPortfolioModalOpen}
        >
          <Flex gap={"0.5rem"} justifyContent="center" alignItems="center">
            <Icon as={BiBookAdd} />
            <Text>Add Portfolio</Text>
          </Flex>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
