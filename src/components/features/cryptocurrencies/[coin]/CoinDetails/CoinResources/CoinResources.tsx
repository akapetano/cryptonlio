import { ContentCard } from "../ContentCard/ContentCard";
import { Heading, Link, Icon, Flex, HStack } from "@chakra-ui/react";
import { BsGlobe2, BsGithub, BsReddit } from "react-icons/bs";
import { CoinBySlug } from "../../../../../../../types/coins";

interface ICoinResourcesProps {
  coin: CoinBySlug;
}

export const CoinResources = ({ coin }: ICoinResourcesProps) => {
  return (
    <ContentCard>
      <Flex flexDir="column" maxWidth="45rem" mb="2rem">
        <Heading as="h3" fontSize="2xl" mb="1rem">
          Resources
        </Heading>
        {coin?.urls?.website &&
          Array.isArray(coin?.urls?.website) &&
          coin?.urls?.website?.length > 0 && (
            <HStack spacing="1rem" mb="1rem">
              <Icon as={BsGlobe2} w={6} h={6} />
              <Link mb="0.5rem" href={coin.urls.website[0]} target="_blank">
                Official Website
              </Link>
            </HStack>
          )}
        {coin?.urls?.sourceCode &&
          Array.isArray(coin?.urls?.sourceCode) &&
          coin?.urls?.sourceCode?.length > 0 && (
            <HStack spacing="1rem" mb="1rem">
              <Icon as={BsGithub} w={6} h={6} />
              <Link
                mb="0.5rem"
                href={coin?.urls?.sourceCode[0]}
                target="_blank"
              >
                GitHub
              </Link>
            </HStack>
          )}
        {coin?.urls?.reddit &&
        Array.isArray(coin?.urls?.reddit) &&
        coin?.urls?.reddit?.length > 0 ? (
          <HStack spacing="1rem">
            <Icon as={BsReddit} w={6} h={6} />
            <Link mb="0.5rem" href={coin?.urls?.reddit[0]} target="_blank">
              Reddit
            </Link>
          </HStack>
        ) : null}
      </Flex>
    </ContentCard>
  );
};
