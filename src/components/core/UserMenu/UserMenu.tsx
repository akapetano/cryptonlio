import {
  Menu,
  MenuList,
  MenuItem,
  Text,
  Button,
  MenuButton,
  Avatar,
  Center,
  MenuDivider,
} from "@chakra-ui/react";

interface IUserMenuProps {
  onSignOut: () => void;
}

export const UserMenu = ({ onSignOut }: IUserMenuProps) => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={"full"}
        variant={"link"}
        cursor={"pointer"}
        minW={0}
      >
        <Avatar
          size={"sm"}
          src={"https://avatars.dicebear.com/api/male/username.svg"}
        />
      </MenuButton>
      <MenuList alignItems={"center"}>
        <br />
        <Center>
          <Avatar
            size={"2xl"}
            src={"https://avatars.dicebear.com/api/male/username.svg"}
          />
        </Center>
        <br />
        <Center>
          <Text>Username</Text>
        </Center>
        <br />
        <MenuDivider />
        <MenuItem>Your Portfolio</MenuItem>
        <MenuItem>Account Settings</MenuItem>
        <MenuItem as={Button} onClick={() => onSignOut()}>
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
