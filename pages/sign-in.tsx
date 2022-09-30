import { SignInForm } from "../src/components/features/sign-in/SignInForm/SignInForm";
import { LayoutMain } from "../src/components/shared/LayoutMain/LayoutMain";
import { Layout } from "../src/components/shared/Layout/Layout";
import { useAuth } from "../hooks/useAuth";

const SignIn = () => {
  const { session, user } = useAuth();

  return (
    <Layout
      headTitle="Crypton - Explore the World of Cryptocurrencies"
      user={user}
      session={session}
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
