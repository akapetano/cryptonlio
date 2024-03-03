export type CURRENCY = "EUR";

export type CoinInSnakeCase = {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  num_market_pairs: number;
  date_added: string;
  tags: string[];
  max_supply: number | null;
  circulating_supply: number;
  total_supply: number;
  infinite_supply: boolean;
  platform: string | null;
  cmc_rank: number;
  self_reported_circulating_supply: null | unknown;
  self_reported_market_cap: null | unknown;
  tvl_ratio: null | unknown;
  last_updated: string;
  quote: {
    CURRENCY: {
      price: number;
      volume_24h: number;
      volume_change_24h: number;
      percent_change_1h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      percent_change_30d: number;
      percent_change_60d: number;
      percent_change_90d: number;
      market_cap: number;
      market_cap_dominance: number;
      fully_diluted_market_cap: number;
      tvl: null | unknown;
      last_updated: string;
    };
  };
};

export type Coin = {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  numMarketPairs: number;
  dateAdded: string;
  tags: string[];
  maxSupply: number | null;
  circulatingSupply: number;
  totalSupply: number;
  infiniteSupply: boolean;
  platform: string | null;
  cmcRank: number;
  selfReportedCirculatingSupply: null | unknown;
  selfReportedMarketCap: null | unknown;
  tvlRatio: null | unknown;
  lastUpdated: string;
  quote: {
    EUR: {
      price: number;
      volume24h: number;
      volumeChange24h: number;
      percentChange1h: number;
      percentChange24h: number;
      percentChange7d: number;
      percentChange30d: number;
      percentChange60d: number;
      percentChange90d: number;
      marketCap: number;
      marketCapDominance: number;
      fullyDilutedMarketCap: number;
      tvl: null | unknown;
      lastUpdated: string;
    };
  };
};

export type CoinBySlug = {
  id: number;
  name: string;
  symbol: string;
  category: string;
  description: string;
  slug: string;
  logo: string;
  subreddit: string;
  notice: string;
  tags: string[];
  tagNames: string[];
  tagGroups: string[];
  urls: {
    website: string[];
    twitter: string[];
    messageBoard: string[];
    chat: string[];
    facebook: string[];
    explorer: string[];
    reddit: string[];
    technicalDoc: string[];
    sourceCode: string[];
    announcement: string[];
  };
  platform: string | null;
  dateAdded: string;
  twitterUsername: string;
  isHidden: 0 | 1 | null;
  dateLaunched: string;
  contractAddress: string[];
  selfReportedCirculatingSupply: string | null;
  selfReportedTags: string[] | null;
  selfReportedMarketCap: string | null;
  infiniteSupply: boolean;
};
