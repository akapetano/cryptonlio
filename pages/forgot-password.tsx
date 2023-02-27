import { ForgotPasswordForm } from "../src/components/features/forgot-password/ForgotPasswordForm/ForgotPasswordForm";
import { LayoutMain } from "../src/components/shared/LayoutMain/LayoutMain";
import { Layout } from "../src/components/shared/Layout/Layout";
import { useAuth } from "../hooks/useAuth";

const ForgotPassword = () => {
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
        <ForgotPasswordForm />
      </LayoutMain>
    </Layout>
  );
};

export default ForgotPassword;
