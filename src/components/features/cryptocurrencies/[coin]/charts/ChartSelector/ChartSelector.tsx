import {
  Tabs,
  TabsProps,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  TabPanelProps,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import { ContentCard } from "../../CoinDetails/ContentCard/ContentCard";
import { CoinLineChart } from "../CoinLineChart/CoinLineChart";

interface IChartSelector extends TabPanelProps {
  coinId: string;
}

export const ChartSelector = ({ coinId, ...restProps }: IChartSelector) => {
  const tabBgColor = useColorModeValue("brand.300", "brand.100");
  const tabTextColor = useColorModeValue("white", "gray.900");

  return (
    <ContentCard>
      <Tabs
        variant="filled"
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <TabList>
          <HStack spacing="0.5rem">
            <Tab
              rounded="xl"
              _focus={{ bg: tabBgColor }}
              _selected={{ color: tabTextColor, bg: tabBgColor }}
            >
              1W
            </Tab>
            <Tab
              rounded="xl"
              _focus={{ bg: tabBgColor }}
              _selected={{ color: tabTextColor, bg: tabBgColor }}
            >
              1M
            </Tab>
            <Tab
              rounded="xl"
              _focus={{ bg: tabBgColor }}
              _selected={{ color: tabTextColor, bg: tabBgColor }}
            >
              3M
            </Tab>
            <Tab
              rounded="xl"
              _focus={{ bg: tabBgColor }}
              _selected={{ color: tabTextColor, bg: tabBgColor }}
            >
              1Y
            </Tab>
          </HStack>
        </TabList>
        <TabPanels>
          <TabPanel
            maxWidth={{ base: "container.sm", md: "container.xl" }}
            width="45rem"
          >
            <CoinLineChart coinId={coinId} days="7" interval="daily" />
          </TabPanel>
          <TabPanel
            maxWidth={{ base: "container.sm", md: "container.xl" }}
            width="45rem"
          >
            <CoinLineChart coinId={coinId} days="30" interval="daily" />
          </TabPanel>
          <TabPanel
            maxWidth={{ base: "container.sm", md: "container.xl" }}
            width="45rem"
          >
            <CoinLineChart coinId={coinId} days="90" interval="daily" />
          </TabPanel>
          <TabPanel
            maxWidth={{ base: "container.sm", md: "container.xl" }}
            width="45rem"
          >
            <CoinLineChart coinId={coinId} days="365" interval="daily" />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </ContentCard>
  );
};
