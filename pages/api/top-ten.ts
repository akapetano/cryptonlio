import { NextApiRequest, NextApiResponse } from "next";
import { convertSnakeCaseToCamelCase } from "../../utils";
import { CoinInSnakeCase, Coin } from "../../types/coins";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const url = process.env.NEXT_PUBLIC_COINMARKETCAP_API_URL;
    const path = "/v1/cryptocurrency/listings/latest";

    const headers = {
      "X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_API_KEY || "",
    };

    const response = await fetch(`${url}${path}?convert=EUR&limit=10`, {
      method: "GET",
      headers: headers,
    });
    const data = await response?.json();

    const coins: Coin[] =
      data && data?.data
        ? data.data.map((coin: CoinInSnakeCase) =>
            convertSnakeCaseToCamelCase(coin)
          )
        : [];

    res.status(200).json(coins);
  } catch (error) {
    console.error("Error fetching cryptocurrency data:", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
}
