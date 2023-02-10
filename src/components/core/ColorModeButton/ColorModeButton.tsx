import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const ColorModeButton = ({ ...restProps }: IconButtonProps) => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(SunIcon, MoonIcon);

  return (
    <IconButton
      variant="primary"
      size="md"
      rounded="full"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...restProps}
    />
  );
};
