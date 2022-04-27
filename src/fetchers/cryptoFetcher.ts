export const CRYPTO_COINGECKO_API_URL =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false';

export const cryptoFetcher = async () => {
  const response = await fetch(CRYPTO_COINGECKO_API_URL);

  return response.json();
};
