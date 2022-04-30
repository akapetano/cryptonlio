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
} from '@chakra-ui/react';
import { ContentCard } from '../../CoinDetails/ContentCard/ContentCard';
import { CoinLineChart } from '../CoinLineChart/CoinLineChart';

interface IChartSelector extends TabPanelProps {
  coinId: string;
}

export const ChartSelector = ({ coinId, ...restProps }: IChartSelector) => {
  const tabBgColor = useColorModeValue('brand.300', 'brand.100');
  const tabTextColor = useColorModeValue('white', 'gray.900');

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
          <HStack spacing="1rem">
            <Tab
              rounded="xl"
              _focus={{ bg: tabBgColor }}
              _selected={{ color: tabTextColor, bg: tabBgColor }}
            >
              24-hour
            </Tab>
            <Tab
              rounded="xl"
              _focus={{ bg: tabBgColor }}
              _selected={{ color: tabTextColor, bg: tabBgColor }}
            >
              30-day
            </Tab>
            <Tab
              rounded="xl"
              _focus={{ bg: tabBgColor }}
              _selected={{ color: tabTextColor, bg: tabBgColor }}
            >
              60-day
            </Tab>
            <Tab
              rounded="xl"
              _focus={{ bg: tabBgColor }}
              _selected={{ color: tabTextColor, bg: tabBgColor }}
            >
              90-day
            </Tab>
          </HStack>
        </TabList>
        <TabPanels>
          <TabPanel maxWidth="container.xl" width="45rem">
            <CoinLineChart coinId={coinId} days="1" interval="hourly" />
          </TabPanel>
          <TabPanel maxWidth="container.xl" width="45rem">
            <CoinLineChart coinId={coinId} days="30" interval="daily" />
          </TabPanel>
          <TabPanel maxWidth="container.xl" width="45rem">
            <CoinLineChart coinId={coinId} days="60" interval="daily" />
          </TabPanel>
          <TabPanel maxWidth="container.xl" width="45rem">
            <CoinLineChart coinId={coinId} days="90" interval="daily" />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </ContentCard>
  );
};
