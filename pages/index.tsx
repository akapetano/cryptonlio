import { Navigation } from '../src/components/core/Navigation/Navigation';
import { TopTenCoinsTable } from '../src/components/features/home/TopTenCoinsTable/TopTenCoinsTable';
import { NextHead } from '../src/components/shared/NextHead/NextHead';
import { Welcome } from '../src/components/features/home/Welcome/Welcome';
import { SignUpForm } from '../src/components/core/SignUpForm/SignUpForm';
import { Footer } from '../src/components/core/Footer/Footer';
import { LayoutMain } from '../src/components/shared/LayoutMain/LayoutMain';
import { Layout } from '../src/components/shared/Layout/Layout';

const HomePage = () => {
  return (
    <Layout>
      <NextHead title="Crypton - Explore the World of Cryptocurrencies" />
      <Navigation />
      <LayoutMain>
        <Welcome />
        <TopTenCoinsTable />
        {/* <SignUpForm /> */}
      </LayoutMain>
      <Footer />
    </Layout>
  );
};

export default HomePage;
