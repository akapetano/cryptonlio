import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export const ColorModeButton = () => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(SunIcon, MoonIcon);

  return (
    <IconButton
      variant="primary"
      size="md"
      aria-label="Toggle light dark mode"
      rounded="full"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
    />
  );
};
