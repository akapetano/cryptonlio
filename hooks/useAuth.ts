import { Session } from "@supabase/supabase-js";
import { useRouter } from "next/router";
import { useState } from "react";
import { ISignUpFormValues, ILoginFormValues } from "../types/auth";
import { useUser } from "@supabase/auth-helpers-react";
import { supabase } from "../utils/supabaseClient";

export const useAuth = () => {
  const [session, setSession] = useState<Session | null>(null);
  const { user } = useUser();
  const router = useRouter();

  const onSignUp = async ({
    firstName,
    lastName,
    email,
    password,
    passwordConfirmation,
    ageConfirmation,
  }: ISignUpFormValues) => {
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

    const supabaseSession = supabase.auth.session();

    if (error) throw error;
    setSession(supabaseSession);
    router.push("/");

    console.log(user);
    console.log(session);
    return { user, session };
  };

  const onLogin = async ({ email, password }: ILoginFormValues) => {
    const { user: supabaseUser, error } = await supabase?.auth?.signIn({
      email,
    });
    if (error) throw error;
    router.push("/");
    return supabaseUser;
  };

  const onSignOut = async () => {
    return supabase?.auth?.signOut();
  };

  return {
    user,
    session,
    setSession,
    onLogin,
    onSignUp,
    onSignOut,
  };
};
