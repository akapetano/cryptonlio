import { PortfolioCoin } from "./crypto";

export interface Portfolio {
  deleted?: boolean;
  insertedAt?: string;
  updatedAt?: string;
  mainPortfolio?: boolean;
  portfolioId?: string;
  portfolioName: string;
  portfolioCoins: PortfolioCoin[] | null;
}
