import { CoinMarketHistory } from '../../../../../../../types/crypto';

export const chartConfig = {
  plugins: {
    // show legends for our graph
    legend: {
      display: false,
    },
    datalabels: {
      display: true,
      color: '#6a0dad',
      align: 'top',
      labels: {
        title: {
          font: {
            weight: 'bold',
            size: 13,
          },
          padding: 10,
        },
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
      x: {
        display: true,
        ticks: {
          color: '#6a0dad',
          maxRotation: 45,
          minRotation: 45,
        },
        grid: {
          color: '#6a0dad',
        },
      },
      y: {
        ticks: {
          color: '#6a0dad',
          padding: 10,
        },
        display: true,
        borderDash: [5, 5],
        grid: {
          color: '#6a0dad',
        },
      },
    },
  },
};

export const getDate = (data: CoinMarketHistory['prices'] | undefined) =>
  data?.slice(-1).map((el) => new Date(el[0]).toLocaleDateString('en-GB'));

export const formatChartData = (
  data: CoinMarketHistory['prices'],
  interval: string
) => {
  return data?.map((el) => {
    const getHours = (timestamp: Date) => {
      const hours = new Date(timestamp).getHours();
      const minutes =
        new Date(timestamp).getMinutes() < 10
          ? `0${new Date(timestamp).getMinutes()}`
          : new Date(timestamp).getMinutes();
      return `${hours}:00`;
    };

    return {
      x:
        interval === 'hourly'
          ? getHours(new Date(el[0]))
          : new Date(el[0]).toLocaleDateString('en-GB'),
      y: el[1],
    };
  });
};
