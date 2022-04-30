import { Container, useColorModeValue } from '@chakra-ui/react';
import { getDate } from './CoinLineChart.utils';
import { useCoinMarketChartHistory } from '../../../../../../../hooks/useCoinMarketChartHistory';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { chartConfig, formatChartData } from './CoinLineChart.utils';

interface ILineChartProps {
  coinId: string;
  days: string;
  interval: string;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const CoinLineChart = ({ coinId, days, interval }: ILineChartProps) => {
  const {
    data: coinMarketHistory,
    isLoading,
    isError,
  } = useCoinMarketChartHistory(coinId, days, interval);
  const bgColor = useColorModeValue('brand.400', 'brand.100');
  const containerBorderColor = useColorModeValue('gray.200', 'gray.700');

  const data = {
    labels: [],
    datasets: [
      {
        label:
          days === '1'
            ? `24-hour Coin Price Chart (${getDate(coinMarketHistory?.prices)})`
            : `${days}-day Coin Price Chart`,
        fill: false,
        lineTension: 0.1,
        data: coinMarketHistory
          ? formatChartData(coinMarketHistory.prices, interval)
          : null,
        borderColor: '#2ecc71',
        backgroundColor: '#c0f0d4',
        borderWidth: 1,
        pointRadius: 3,
        pointHoverRadius: 7,
        pointHoverBackgroundColor: '#27ae60',
        pointHoverBorderColor: '#27ae60',
        pointHoverBorderWidth: 2,
      },
    ],
  };

  return (
    <Container p={5} height="25rem" maxWidth="container.xl">
      <Line data={data} options={chartConfig} />
    </Container>
  );
};
