import { PortfolioCoin } from "./crypto";

export interface Portfolio {
  portfolioName: string;
  portfolioCoins: PortfolioCoin[] | null;
}
