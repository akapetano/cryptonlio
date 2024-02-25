export type NewCoin = {
  marketCapRank: string;
  name: string;
  symbol: string;
  image: string;
  currentPrice: string;
  priceChangePercentage1h: string;
  priceChangePercentage24h: string;
  priceChangePercentage7d: string;
  marketCap: string;
  totalVolume: string;
  circulatingSupply: string;
};

export type Coin = {
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  circulating_supply: number;
  current_price: number;
  fully_diluted_valuation: number;
  high_24h: number;
  id: string;
  image: string;
  last_updated: string;
  low_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  max_supply: number;
  name: string;
  price_change_24h: number;
  price_change_percentage_24h: number;
  roi: null;
  symbol: string;
  total_supply: number;
  total_volume: number;
};

export interface PortfolioCoin {
  coinId: string;
  coinName: string;
  holdings: number;
  price_in_usd?: number;
  price_in_eur?: number;
}

export type CoinById = {
  additional_notices: [];
  asset_platform_id: string | null;
  block_time_in_minutes: number;
  categories: string[];
  coingecko_rank: number;
  coingecko_score: number;
  community_data: {};
  community_score: number;
  country_origin: string;
  description: { en: string };
  developer_data: {};
  developer_score: number;
  genesis_date: string;
  hashing_algorith: string;
  id: string;
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  last_updated: string;
  links: {
    homepage: string[];
    repos_url: { github: string[] };
    subreddit_url: string;
  };

  liquidity_score: number;
  market_cap_rank: number;
  market_data: {
    ath: {
      usd: number;
    };
    ath_change_percentage: {
      usd: number;
    };
    ath_date: {
      usd: string;
    };
    atl: {
      usd: number;
    };
    atl_change_percentage: {
      usd: number;
    };
    atl_date: {
      usd: string;
    };
    circulating_supply: number;
    current_price: { usd: number };
    fdv_to_tvl_ratio: string | null;
    fully_diluted_valuation: {
      usd: number;
    };
    high_24h: { usd: number };
    last_updated: string;
    low_24h: { usd: number };
    market_cap: { usd: number };
    market_cap_change_24h: number;
    market_cap_change_24h_in_currency: { usd: number };
    market_cap_change_percentage_24h: number;
    market_cap_change_percentage_24h_in_currency: { usd: number };
    market_cap_rank: number;
    max_supply: number;
    mcap_to_tvl_ratio: string | null;
    price_change_24h: number;
    price_change_24h_in_currency: { usd: number };
    price_change_percentage_1h_in_currency: { usd: number };
    price_change_percentage_1y: number;
    price_change_percentage_1y_in_currency: { usd: number };
    price_change_percentage_7d: number;
    price_change_percentage_7d_in_currency: { usd: number };
    price_change_percentage_14d: number;
    price_change_percentage_14d_in_currency: { usd: number };
    price_change_percentage_24h: number;
    price_change_percentage_24h_in_currency: { usd: number };
    price_change_percentage_30d: number;
    price_change_percentage_30d_in_currency: { usd: number };
    price_change_percentage_60d: number;
    price_change_percentage_60d_in_currency: { usd: number };
    price_change_percentage_200d: number;
    price_change_percentage_200d_in_currency: { usd: number };
    roi: number | null;
    sparkline_7d: { price: Array<number> };
    total_supply: number;
    total_value_locked: number | null;
    total_volume: { usd: number };
  };
  name: string;
  platforms: {};
  public_interest_score: number;
  public_interest_stats: { alexa_rank: number; bing_matches: null };
  public_notice: null;
  sentiment_votes_down_percentage: number;
  sentiment_votes_up_percentage: number;
  status_updates: [];
  symbol: string;
  tickers: Array<Object>;
};

export type CoinMarketHistory = {
  market_caps: Array<Array<number>>;
  prices: Array<Array<number>>;
  total_volumes: Array<Array<number>>;
};
