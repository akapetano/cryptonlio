import { NextApiRequest, NextApiResponse } from "next";
import { convertSnakeCaseToCamelCase } from "../../utils";
import { Coin } from "../../types/coins";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (!req.query.slug) {
      res.status(400).json({ error: "Missing slug parameter" });
      return;
    }

    const url = process.env.NEXT_PUBLIC_COINMARKETCAP_API_URL;
    const path = `/v2/cryptocurrency/info?slug=${req.query.slug}`;

    const headers = {
      "X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_API_KEY || "",
    };

    const infoResponse = await fetch(`${url}${path}`, {
      method: "GET",
      headers: headers,
    });
    const infoData = await infoResponse?.json();

    if (!infoData?.data) {
      const status = infoData?.status?.error_code || 404;
      const error = infoData?.status?.error_message || "Coin not found";

      res.status(status).json({ error });
      return;
    }

    const firstKey = Object.keys(infoData?.data)[0];

    const coinData = infoData?.data[firstKey];

    const coin = convertSnakeCaseToCamelCase(coinData) as Coin;

    res.status(200).json(coin);
  } catch (error) {
    console.error("Error fetching cryptocurrency data:", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
}
