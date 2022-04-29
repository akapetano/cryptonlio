import { Container } from '@chakra-ui/react';
import {} from './LineChart.utils';
import { useCoinMarketChartHistory } from '../../../../../../../hooks/useCoinMarketChartHistory';
import { CoinMarketHistory } from '../../../../../../../types/crypto';
import { Chart } from 'chart.js/auto';
import { chartConfig, formatChartData } from './LineChart.utils';

import { Line } from 'react-chartjs-2';

interface ILineChartProps {
  coinId: string;
}

export const LineChart = ({ coinId }: ILineChartProps) => {
  const {
    data: coinMarketHistory,
    isLoading,
    isError,
  } = useCoinMarketChartHistory(coinId);

  console.log(coinMarketHistory);

  const data = {
    datasets: [
      {
        label: 'Coin Price Chart',
        fill: true,
        data: coinMarketHistory
          ? formatChartData(coinMarketHistory.prices)
          : null,
        borderColor: 'rgb(255,99,132)',
        borderWidth: 3,
        pointRadius: pointRadius,
        pointHoverRadius: 5,
        borderCapStyle: 'butt',
        pointHoverBackgroundColor: 'rgba(59, 130, 246, 1)',
        pointHoverBorderColor: 'rgba(59, 130, 246, 1)',
        pointHoverBorderWidth: 2,
      },
    ],
  };

  return (
    <Container height={'100%'} width={'100%'} p={2} maxWidth="container.xl">
      <Line data={data} options={chartConfig} />
    </Container>
  );
};
