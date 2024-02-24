import cheerio from "cheerio";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const coingecko = "https://www.coingecko.com/";
    const coinmarketcap = "https://coinmarketcap.com/";

    const response = await fetch(coinmarketcap, { method: "GET" });
    const html = await response?.text();

    const $ = cheerio.load(html);

    const cmElementSelector =
      "#__next > div.sc-65dd1213-1.ipsZBU.global-layout-v2 > div.main-content > div.cmc-body-wrapper > div > div:nth-child(1) > div.sc-14cb040a-2.hptPYH > table > tbody > tr";

    const keys = [
      "rank",
      "name",
      "price",
      "1h",
      "24h",
      "7d",
      "marketCap",
      "volume",
      "circulatingSupply",
    ];

    const coinArr = [];

    const cryptoData = $(cmElementSelector).each(
      (parentIndex, parentElement) => {
        let keyIndex = 0;
        const coinObject = {};

        if (parentIndex <= 9) {
          $(parentElement)
            .children()
            .each((childIndex, childElement) => {
              let tdValue = $(childElement).text();

              if (keyIndex === 1 || keyIndex === 6) {
                tdValue = $(
                  "div:first-child > p:first-child",
                  $(childElement).html()
                ).text();
              }

              if (tdValue) {
                coinObject[keys[keyIndex]] = tdValue;
                keyIndex++;
              }
            });

          coinArr.push(coinObject);
        }
      }
    );

    res.status(200).json(coinArr);
  } catch (error) {
    console.error("Error scraping cryptocurrency data:", error);
    res.status(500).json({ error: "An error occurred while scraping data" });
  }
}
