import { LoginForm } from "../src/components/features/login/LoginForm/LoginForm";
import { LayoutMain } from "../src/components/shared/LayoutMain/LayoutMain";
import { Layout } from "../src/components/shared/Layout/Layout";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
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
        <LoginForm />
      </LayoutMain>
    </Layout>
  );
};

export default Login;
