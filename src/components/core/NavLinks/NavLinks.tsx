import { Stack, StackProps } from "@chakra-ui/react";
import { useAuth } from "../../../../hooks/useAuth";
import { NavLink } from "../NavLink/NavLink";

const NAV_ITEMS = ["Home", "Cryptocurrencies", "Portfolio"];
const MOBILE_NAV_ITEMS = [
  "Home",
  "Cryptocurrencies",
  "Portfolio",
  "Settings",
  "Logout",
];

interface INavLinksProps extends StackProps {
  isMobile?: boolean;
  hasUser?: boolean;
}

export const NavLinks = ({
  isMobile = false,
  hasUser = false,
  ...restProps
}: INavLinksProps) => {
  const navItems = isMobile && hasUser ? MOBILE_NAV_ITEMS : NAV_ITEMS;
  const { handleSignOut } = useAuth();
  return (
    <Stack as={"nav"} spacing={8} {...restProps}>
      {navItems.map((navItem, index) => {
        return (
          <NavLink
            width={{ base: "135%", md: "auto" }}
            key={navItem + index}
            to={
              navItem === "Home" || navItem === "Logout"
                ? "/"
                : `/${navItem.replace(/\s+/g, "-").toLowerCase()}`
            }
            linkName={navItem}
            onClick={navItem === "Logout" ? () => handleSignOut() : () => null}
          />
        );
      })}
    </Stack>
  );
};
