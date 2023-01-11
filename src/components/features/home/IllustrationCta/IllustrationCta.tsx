import { Flex, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { IllustrationTextWrapper } from "./IllustrationTextWrapper/IllustrationTextWrapper";
import { BitcoinIllustration } from "../../../core/Illustrations/BitcoinIllustration/BitcoinIllustration";
import { PieGraphIllustration } from "../../../core/Illustrations/PieGraphIllustration/PieGraphIllustration";
import { InvestmentIllustration } from "../../../core/Illustrations/InvestmentIllustration/InvestmentIllustration";
import { TopTenCoinsLink } from "../TopTenCoinsLink/TopTenCoinsLink";

export const IllustrationCta = () => {
  return (
    <Flex flexDir={"column"}>
      <IllustrationTextWrapper
        illustration={<BitcoinIllustration />}
        text={
          <span>
            Bitcoin is still king. <br /> <TopTenCoinsLink />
          </span>
        }
        textIsLeft={true}
      />
      <IllustrationTextWrapper
        illustration={<InvestmentIllustration />}
        text={
          <Text>
            Up for a deep dive? <br /> Check out more than 200{" "}
            <NextLink href={"/cryptocurrencies"} passHref>
              <Link>cryptocurrencies</Link>
            </NextLink>
            .
          </Text>
        }
      />
      <IllustrationTextWrapper
        illustration={<PieGraphIllustration />}
        text={
          <Text>
            Want to track your investment? <br /> Build your{" "}
            <NextLink href={"/portfolios"} passHref>
              <Link>portfolio</Link>
            </NextLink>
            .
          </Text>
        }
        textIsLeft={true}
      />
    </Flex>
  );
};
