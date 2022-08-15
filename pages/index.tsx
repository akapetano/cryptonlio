import { Navigation } from "../src/components/core/Navigation/Navigation";
import { TopTenCoinsTable } from "../src/components/features/home/TopTenCoinsTable/TopTenCoinsTable";
import { NextHead } from "../src/components/shared/NextHead/NextHead";
import { Welcome } from "../src/components/features/home/Welcome/Welcome";
import { Footer } from "../src/components/core/Footer/Footer";
import { LayoutMain } from "../src/components/shared/LayoutMain/LayoutMain";
import { Layout } from "../src/components/shared/Layout/Layout";
import { useAuth } from "../hooks/useAuth";
import { supabase } from "../utils/supabaseClient";
import { useEffect } from "react";

const HomePage = () => {
  const { session, setSession } = useAuth();

  useEffect(() => {
    setSession(supabase?.auth?.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  });

  return (
    <Layout>
      <NextHead title="Crypton - Explore the World of Cryptocurrencies" />
      <Navigation session={session} />
      <LayoutMain>
        <Welcome />
        <TopTenCoinsTable session={session} />
      </LayoutMain>
      <Footer />
    </Layout>
  );
};

export default HomePage;
