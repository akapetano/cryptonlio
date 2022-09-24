import { Navigation } from "../src/components/shared/Navigation/Navigation";
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
  const { session, setSession, user, onSignOut } = useAuth();

  useEffect(() => {
    setSession(supabase?.auth?.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  });

  console.log(user);

  return (
    <Layout>
      <NextHead title="Crypton - Explore the World of Cryptocurrencies" />
      <Navigation user={user} session={session} onSignOut={onSignOut} />
      <LayoutMain>
        <Welcome />
        <TopTenCoinsTable session={session} />
      </LayoutMain>
      <Footer />
    </Layout>
  );
};

export default HomePage;
