import { CoinMarketHistory } from '../../../../../../../types/crypto';

export const chartConfig = {
  plugins: {
    // show legends for our graph
    legend: {
      display: false,
    },
    datalabels: {
      display: true,
      color: 'blue',
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
      xAxes: {
        // display: true,
        ticks: {
          color: 'blue',
          fontSize: 12,
          maxRotation: 45,
          minRotation: 45,
        },
        grid: {
          drawBorder: true,
          color: 'blue',
        },
      },
      yAxes: {
        ticks: {
          color: 'blue',
          fontSize: 12,
          padding: 10,
        },
        // display: true,
        borderDash: [5, 5],
        grid: {
          drawBorder: true,
          color: 'blue',
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
