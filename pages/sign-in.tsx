import { NextHead } from "../src/components/shared/NextHead/NextHead";
import { SignInForm } from "../src/components/features/sign-in/SignInForm/SignInForm";
import { LayoutMain } from "../src/components/shared/LayoutMain/LayoutMain";
import { Layout } from "../src/components/shared/Layout/Layout";
import { useUser } from "@supabase/auth-helpers-react";
import { useAuth } from "../hooks/useAuth";

const SignIn = () => {
  // const { user } = useUser();
  const { session, user, onSignOut } = useAuth();

  return (
    <Layout
      headTitle="Crypton - Explore the World of Cryptocurrencies"
      user={user}
      session={session}
      onSignOut={onSignOut}
      hasNavigation={false}
      hasFooter={false}
    >
      <LayoutMain>
        <SignInForm />
      </LayoutMain>
    </Layout>
  );
};

export default SignIn;
