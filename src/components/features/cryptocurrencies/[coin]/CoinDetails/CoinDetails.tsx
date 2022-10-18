import {
  Box,
  Flex,
  Text,
  Heading,
  VStack,
  HStack,
  Link,
  Button,
  Badge,
  Icon,
} from "@chakra-ui/react";
import parse, {
  attributesToProps,
  Element,
  Text as TextType,
} from "html-react-parser";
import Image from "next/image";
import { useState } from "react";
import { CoinById } from "../../../../../../types/crypto";
import { ChartSelector } from "../charts/ChartSelector/ChartSelector";
import { CoinMarketData } from "./CoinMarketData/MarketData";
import { CoinDescription } from "./CoinDescription/CoinDescription";
import { CoinResources } from "./CoinResources/CoinResources";
import { CoinHeader } from "./CoinHeader/CoinHeader";

interface ICoinDetails {
  coin: CoinById;
}

export const CoinDetails = ({ coin }: ICoinDetails) => {
  const [readMore, setReadMore] = useState(false);

  const coinDescription = parse(
    coin.description.en,
    // readMore ? coin?.description?.en : coin?.description?.en?.slice(0, 350),
    {
      replace: (domNode) => {
        if (domNode instanceof Element && domNode.name === "a") {
          const props = attributesToProps(domNode?.attribs);
          const text = (domNode.children[0] as TextType).data;
          return (
            <Link textDecoration="none" target="_blank" {...props}>
              {text}
            </Link>
          );
        }
      },
    }
  );

  return (
    <Box>
      <CoinHeader coin={coin} />
      <ChartSelector coinId={coin.id} />
      <CoinMarketData coin={coin} />
      <CoinDescription
        description={coinDescription}
        readMore={readMore}
        setReadMore={setReadMore}
      />
      <CoinResources coin={coin} />
    </Box>
  );
};
