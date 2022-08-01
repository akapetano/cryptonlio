import { Navigation } from "../src/components/core/Navigation/Navigation";
import { NextHead } from "../src/components/shared/NextHead/NextHead";
import { SignUpForm } from "../src/components/core/SignUpForm/SignUpForm";
import { Footer } from "../src/components/core/Footer/Footer";
import { LayoutMain } from "../src/components/shared/LayoutMain/LayoutMain";
import { Layout } from "../src/components/shared/Layout/Layout";

const SignUp = () => {
  return (
    <Layout>
      <NextHead title="Crypton - Explore the World of Cryptocurrencies" />
      <LayoutMain>
        <SignUpForm />
      </LayoutMain>
    </Layout>
  );
};

export default SignUp;
