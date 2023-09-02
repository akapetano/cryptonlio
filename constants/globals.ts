export const COINGECKO_API_URL = process.env
  .NEXT_PUBLIC_COINGECKO_API_URL as string;
export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
export const SUPABASE_ANON_KEY = process.env
  .NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
export const COINS_COINGECKO_API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false";
