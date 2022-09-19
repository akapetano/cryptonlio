import { Session, User } from "@supabase/supabase-js";
import Error from "next/error";
import { useState } from "react";
import { ISignUpFormValues } from "../types/auth";
import { supabase } from "../utils/supabaseClient";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [session, setSession] = useState<Session | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const handleSignUp = async ({
    firstName,
    lastName,
    email,
    password,
    passwordConfirmation,
    ageConfirmation,
  }: ISignUpFormValues) => {
    try {
      setLoading(true);
      const { user: supabaseUser, error } = await supabase?.auth?.signUp(
        {
          email,
          password,
        },
        {
          data: {
            firstName,
            lastName,
            passwordConfirmation,
            ageConfirmation,
          },
        }
      );
      setUser(supabaseUser);
      if (error) throw error;
    } catch (error) {
      if (error) alert(error);
    } finally {
      setLoading(false);
    }
  };

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
    handleSignUp,
  };
};
