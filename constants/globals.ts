export const COINGECKO_API_URL = "https://api.coingecko.com/api/v3";
export const COINS_COINGECKO_API_URL = `${COINGECKO_API_URL}/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false`;
export const COINS_COINGECKO_API_URL_TOP10 = `${COINGECKO_API_URL}/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=10&page=1&sparkline=false`;

export const COIN_COINGECKO_API_URL = (id: string) => {
  if (!id) {
    return null;
  } else {
    return `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`;
  }
};
