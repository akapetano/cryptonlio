import { Stack, StackProps } from "@chakra-ui/react";
import { NavLink } from "../NavLink/NavLink";

const NAV_ITEMS = ["Home", "Cryptocurrencies", "Portfolio"];

export const NavLinks = ({ ...restProps }: StackProps) => {
  return (
    <Stack as={"nav"} spacing={8} {...restProps}>
      {NAV_ITEMS.map((navItem, index) => {
        return (
          <NavLink
            width={{ base: "135%", md: "auto" }}
            key={navItem + index}
            to={
              navItem === "Home"
                ? "/"
                : `/${navItem.replace(/\s+/g, "-").toLowerCase()}`
            }
            linkName={navItem}
          />
        );
      })}
    </Stack>
  );
};
