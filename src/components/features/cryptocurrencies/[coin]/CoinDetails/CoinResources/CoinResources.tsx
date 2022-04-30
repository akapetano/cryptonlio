import { ContentCard } from '../ContentCard/ContentCard';
import { Heading, Link, Icon, Flex, HStack } from '@chakra-ui/react';
import { BsGlobe2, BsGithub, BsReddit } from 'react-icons/bs';
import { CoinById } from '../../../../../../../types/crypto';

interface ICoinResourcesProps {
  coin: CoinById;
}

export const CoinResources = ({ coin }: ICoinResourcesProps) => {
  return (
    <ContentCard>
      <Flex flexDir="column" maxWidth="45rem" mb="2rem">
        <Heading as="h3" fontSize="2xl" mb="1rem">
          Resources
        </Heading>
        <HStack spacing="1rem" mb="1rem">
          <Icon as={BsGlobe2} w={6} h={6} />
          <Link mb="0.5rem" href={coin.links.homepage[0]} target="_blank">
            Official Website
          </Link>
        </HStack>
        <HStack spacing="1rem" mb="1rem">
          <Icon as={BsGithub} w={6} h={6} />
          <Link
            mb="0.5rem"
            href={coin.links.repos_url.github[0]}
            target="_blank"
          >
            GitHub
          </Link>
        </HStack>
        {coin.links.subreddit_url ? (
          <HStack spacing="1rem">
            <Icon as={BsReddit} w={6} h={6} />
            <Link mb="0.5rem" href={coin.links.subreddit_url} target="_blank">
              Reddit
            </Link>
          </HStack>
        ) : null}
      </Flex>
    </ContentCard>
  );
};
