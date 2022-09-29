import { Navigation } from "../src/components/shared/Navigation/Navigation";
import { TopTenCoinsTable } from "../src/components/features/home/TopTenCoinsTable/TopTenCoinsTable";
import { NextHead } from "../src/components/shared/NextHead/NextHead";
import { Welcome } from "../src/components/features/home/Welcome/Welcome";
import { Footer } from "../src/components/core/Footer/Footer";
import { LayoutMain } from "../src/components/shared/LayoutMain/LayoutMain";
import { Layout } from "../src/components/shared/Layout/Layout";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { useUser } from "@supabase/auth-helpers-react";

const HomePage = () => {
  const { user } = useUser();
  const { session, setSession, onSignOut } = useAuth();

  return (
    <Layout
      headTitle="Crypton - Explore the World of Cryptocurrencies"
      user={user}
      session={session}
      onSignOut={onSignOut}
    >
      <LayoutMain>
        <Welcome />
        <TopTenCoinsTable session={session} />
      </LayoutMain>
    </Layout>
  );
};

export default HomePage;
