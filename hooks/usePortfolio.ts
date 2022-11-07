import { useState } from "react";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";

export function usePortfolio() {
  const [portfolioName, setPortfolioName] = useState("");
  const [portfolioList, setPortfolioList] = useState<string[]>([]);

  const { data, error } = supabaseClient
    .from("portfolios")
    .insert([{ some_column: "someValue", other_column: "otherValue" }]);

  return { portfolioName, setPortfolioName, portfolioList, setPortfolioList };
}
