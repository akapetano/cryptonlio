import { Flex, useColorModeValue, Icon } from "@chakra-ui/react";
import Image, { ImageProps } from "next/image";
import { useAuth } from "../../../../hooks/useAuth";
import { UserIcon } from "./UserIcon";

interface IUserInterfaceProps {
  height: number;
  width: number;
  bgColor?: string;
}

export const UserAvatar = ({ height, width, bgColor }: IUserInterfaceProps) => {
  const { userAvatar } = useAuth();
  const defaultBgColor = useColorModeValue("gray.200", "gray.300");

  return (
    <Flex
      bg={bgColor ? bgColor : defaultBgColor}
      rounded="full"
      overflow="hidden"
      p="0.5rem"
    >
      <Icon as={UserIcon} w="1rem" h="1rem" />
      {/* <Image
        height={height}
        width={width}
        src={userAvatar}
        alt="User crypto avatar"
      /> */}
    </Flex>
  );
};
