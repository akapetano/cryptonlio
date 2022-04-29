import { Chart, Line } from 'react-chartjs-2';
import { useMemo } from 'react';
import { CoinById } from '../../../../../../../types/crypto';

interface ILineChartProps {
  coin: CoinById;
}

export const LineChart = ({ coin }: ILineChartProps) => {
  // const data = {
  //   labels: data.
  // }
  console.log(coin);

  // return <Chart options={{ data, options }} />;
  return <></>;
};
