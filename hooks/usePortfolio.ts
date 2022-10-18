import { useState } from "react";

export function usePortfolio() {
  const [portfolioName, setPortfolioName] = useState("");
  const [portfolioList, setPortfolioList] = useState<string[]>([]);

  return { portfolioName, setPortfolioName, portfolioList, setPortfolioList };
}
