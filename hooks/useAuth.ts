import Error from "next/error";
import { useState } from "react";
import { supabase } from "../utils/supabaseClient";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (email: string) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error) {
      if (error) alert(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    setLoading,
    email,
    setEmail,
    handleLogin,
  };
};
