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
  onSignOut: () => void;
  hasFooter?: boolean;
}

export const Layout = ({
  headTitle,
  hasNavigation = true,
  user,
  session,
  onSignOut,
  hasFooter = true,
  children,
  ...restProps
}: ILayoutProps) => {
  return (
    <Box {...restProps}>
      <NextHead title={headTitle} />
      {hasNavigation ? (
        <Navigation user={user} session={session} onSignOut={onSignOut} />
      ) : null}
      {children}
      {hasFooter ? <Footer /> : null}
    </Box>
  );
};
