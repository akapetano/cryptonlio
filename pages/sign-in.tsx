import { NextHead } from "../src/components/shared/NextHead/NextHead";
import { SignInForm } from "../src/components/features/sign-in/SignInForm/SignInForm";
import { Footer } from "../src/components/core/Footer/Footer";
import { LayoutMain } from "../src/components/shared/LayoutMain/LayoutMain";
import { Layout } from "../src/components/shared/Layout/Layout";

const SignIn = () => {
  return (
    <Layout>
      <NextHead title="Crypton - Explore the World of Cryptocurrencies" />
      <LayoutMain>
        <SignInForm />
      </LayoutMain>
    </Layout>
  );
};

export default SignIn;
