import { CoinMarketHistory } from '../../../../../../../types/crypto';

export const chartConfig = {
  plugins: {
    // show legends for our graph
    legend: {
      display: true,
    },
  },
  lineHeightAnnotation: {
    always: true,
    lineWeight: 1.5,
  },

  //   animate in
  animation: {
    duration: 1,
  },
  maintainAspectRatio: false,
  responsive: true,

  //   show the x and y scales
  scales: {
    x: { display: true },
    y: { display: true },
  },
};

export const formatChartData = (data: CoinMarketHistory['prices']) => {
  return data?.map((el) => {
    return {
      x: new Date(el[0]).toLocaleDateString('en-GB'),
      y: el[1],
    };
  });
};
