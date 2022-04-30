import { COINGECKO_API_URL } from '../../constants/globals';

export const getMarketChartKey = (
  coinId: string,
  days: string,
  interval: string
) =>
  coinId
    ? `${COINGECKO_API_URL}/coins/${coinId}/market_chart?vs_currency=usd&days=${days}&interval=${interval}`
    : null;

export const marketChartFetcher = async (url: string) => {
  const response = await fetch(url);

  return response.json();
};
