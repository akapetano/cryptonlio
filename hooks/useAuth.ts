import { Session, User } from "@supabase/supabase-js";
import Error from "next/error";
import { useState } from "react";
import { supabase } from "../utils/supabaseClient";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [session, setSession] = useState<Session | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = async (email: string) => {
    try {
      setLoading(true);
      const { user: supabaseUser, error } = await supabase?.auth?.signIn({
        email,
      });
      setUser(supabaseUser);
      if (error) throw error;
    } catch (error) {
      if (error) alert(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    setLoading,
    email,
    setEmail,
    handleLogin,
    session,
    setSession,
  };
};
