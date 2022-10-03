import { Flex, useColorModeValue } from "@chakra-ui/react";
import NextImage, { ImageProps } from "next/image";
import { useAuth } from "../../../../hooks/useAuth";

interface IUserInterfaceProps {
  height: number;
  width: number;
  bgColor?: string;
}

export const UserAvatar = ({ height, width, bgColor }: IUserInterfaceProps) => {
  const { userAvatar } = useAuth();
  const defaultBgColor = useColorModeValue("pink.200", "pink.300");

  return (
    <Flex
      bg={bgColor ? bgColor : defaultBgColor}
      rounded="full"
      overflow="hidden"
    >
      <NextImage
        height={height}
        width={width}
        src={userAvatar}
        alt="User crypto avatar"
      />
    </Flex>
  );
};
