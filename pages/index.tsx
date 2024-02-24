import { useState, useEffect } from "react";
import { TopTenCoinsTable } from "../src/components/features/home/TopTenCoinsTable/TopTenCoinsTable";
import { Welcome } from "../src/components/features/home/Welcome/Welcome";
import { LayoutMain } from "../src/components/shared/LayoutMain/LayoutMain";
import { Layout } from "../src/components/shared/Layout/Layout";
import { useAuth } from "../hooks/useAuth";
import { useUser } from "@supabase/auth-helpers-react";
import { IllustrationCta } from "../src/components/features/home/IllustrationCta/IllustrationCta";

const HomePage = () => {
  const { user } = useUser();
  const { session } = useAuth();

  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/coins");
        if (response.ok) {
          const data = await response.json();
          setCryptoData(data);
        } else {
          console.error(
            "Failed to fetch cryptocurrency data:",
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error fetching cryptocurrency data:", error);
      }
    };

    fetchData();
  }, []);

  console.log({ cryptoData });

  return (
    <Layout
      headTitle="Cryptonlio - Explore the World of Cryptocurrencies"
      user={user}
      session={session}
    >
      <LayoutMain>
        <Welcome />
        <IllustrationCta />
        <TopTenCoinsTable />
      </LayoutMain>
    </Layout>
  );
};

export default HomePage;
