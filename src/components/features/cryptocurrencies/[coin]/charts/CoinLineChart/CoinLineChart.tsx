import { Container, useColorModeValue } from "@chakra-ui/react";
import { getDate } from "./CoinLineChart.utils";
import { useCoinMarketChartHistory } from "../../../../../../../hooks/useCoinMarketChartHistory";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { chartConfig, formatChartData } from "./CoinLineChart.utils";

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
  const pointBgColor = useColorModeValue("#a55eea", "#e056fd");
  const pointHoverBgColor = useColorModeValue("#8854d0", "#be2edd");
  const pointBorderColor = useColorModeValue("#44bd32", "#badc58");
  const pointHoverBorderColor = useColorModeValue("#20bf6b", "#4cd137");
  const {
    data: coinMarketHistory,
    isLoading,
    isError,
  } = useCoinMarketChartHistory(coinId, days, interval);

  const data = {
    labels: [],
    datasets: [
      {
        label:
          days === "1"
            ? `24-hour Coin Price Chart (${getDate(coinMarketHistory?.prices)})`
            : `${days}-day Coin Price Chart`,
        fill: false,
        data: coinMarketHistory
          ? formatChartData(coinMarketHistory.prices, interval)
          : null,
        color: "black",
        backroundColor: pointBgColor,
        borderColor: pointBorderColor,
        pointBackgroundColor: pointBgColor,
        pointBorderColor: pointBorderColor,
        borderWidth: 1,
        pointRadius: days === "365" ? 1 : 3,
        pointHoverRadius: days === "365" ? 5 : 7,
        pointHoverBackgroundColor: pointHoverBgColor,
        pointHoverBorderColor: pointHoverBorderColor,
        pointHoverBorderWidth: 2,
      },
    ],
  };

  return (
    <Container
      p={5}
      height="25rem"
      maxWidth={{ base: "container.sm", md: "container.xl" }}
    >
      <Line data={data} options={chartConfig} />
    </Container>
  );
};
