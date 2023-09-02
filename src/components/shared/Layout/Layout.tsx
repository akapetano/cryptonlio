import { Box, BoxProps } from "@chakra-ui/react";
import { NextHead } from "../NextHead/NextHead";
import { Navigation } from "../Navigation/Navigation";
import { User, Session } from "@supabase/supabase-js";
import { Footer } from "../../core/Footer/Footer";

interface ILayoutProps extends BoxProps {
  headTitle: string;
  hasNavigation?: boolean;
  user: User | null;
  session: Session | null;
  hasFooter?: boolean;
}

export const Layout = ({
  headTitle,
  hasNavigation = true,
  user,
  session,
  hasFooter = true,
  children,
  ...restProps
}: ILayoutProps) => {
  return (
    <Box {...restProps}>
      <NextHead title={headTitle} />
      {hasNavigation ? <Navigation user={user} /> : null}
      {children}
      {hasFooter ? <Footer /> : null}
    </Box>
  );
};
