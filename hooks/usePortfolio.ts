import { useState } from "react";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { Portfolio } from "../types/portfolio";

export function usePortfolio() {
  const [portfolioName, setPortfolioName] = useState("");
  const [portfolioList, setPortfolioList] = useState<Portfolio[] | null>(null);

  // const { data, error } = supabaseClient
  //   .from("portfolios")
  //   .insert([{ some_column: "someValue", other_column: "otherValue" }]);

  return { portfolioName, setPortfolioName, portfolioList, setPortfolioList };
}
