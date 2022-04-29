import { Container, useColorModeValue } from '@chakra-ui/react';
import {} from './LineChart.utils';
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
import { chartConfig, formatChartData } from './LineChart.utils';

interface ILineChartProps {
  coinId: string;
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

export const LineChart = ({ coinId }: ILineChartProps) => {
  const {
    data: coinMarketHistory,
    isLoading,
    isError,
  } = useCoinMarketChartHistory(coinId);
  const bgColor = useColorModeValue('brand.400', 'brand.100');
  const borderColor = useColorModeValue('#153117', 'brand.100');

  const data = {
    labels: [],
    datasets: [
      {
        label: '90-day Coin Price Chart',
        fill: false,
        lineTension: 0.1,
        data: coinMarketHistory
          ? formatChartData(coinMarketHistory.prices)
          : null,
        borderColor: 'rgba(21, 49, 23, 0.3)',
        backgroundColor: '#2ecc71',
        borderWidth: 1,
        pointRadius: 3,
        pointHoverRadius: 7,
        pointHoverBackgroundColor: '#27ae60',
        pointHoverBorderColor: '#d35400',
        pointHoverBorderWidth: 2,
      },
    ],
  };

  return (
    <Container p={2} height="25rem" maxWidth="container.xl" mb="2rem">
      <Line data={data} options={chartConfig} />
    </Container>
  );
};
