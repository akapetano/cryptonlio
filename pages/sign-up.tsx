import { SignUpForm } from "../src/components/features/sign-up/SignUpForm/SignUpForm";
import { LayoutMain } from "../src/components/shared/LayoutMain/LayoutMain";
import { Layout } from "../src/components/shared/Layout/Layout";
import { useAuth } from "../hooks/useAuth";

const SignUp = () => {
  const { session, user } = useAuth();

  return (
    <Layout
      headTitle="Cryptonlio - Explore the World of Cryptocurrencies"
      user={user}
      session={session}
      hasNavigation={false}
      hasFooter={false}
    >
      <LayoutMain>
        <SignUpForm />
      </LayoutMain>
    </Layout>
  );
};

export default SignUp;
