import { Session, User } from "@supabase/supabase-js";
import { useRouter } from "next/router";
import { useState } from "react";
import { ISignUpFormValues, ILoginFormValues } from "../types/auth";
import { useUser } from "@supabase/auth-helpers-react";
import { supabase } from "../lib/supabaseClient";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { useToast } from "@chakra-ui/react";

export const useAuth = () => {
  const [session, setSession] = useState<Session | null>(null);
  const { error } = useUser();
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const toast = useToast();

  const onSignUp = async ({
    firstName,
    lastName,
    email,
    password,
    passwordConfirmation,
    ageConfirmation,
  }: ISignUpFormValues) => {
    const {
      user: supabaseUser,
      session: supabaseSession,
      error,
    } = await supabaseClient?.auth?.signUp(
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

    if (error) {
      toast({
        position: "top",
        title: "Error!",
        description: error?.message,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } else {
      toast({
        position: "top",
        title: "Success!",
        description:
          "Your account has been successfully created, please sign in.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      setSession(supabaseSession);
      setUser(supabaseUser);
      router.push("/sign-in");
      return { user, session };
    }
  };

  const onSignIn = async ({ email, password }: ILoginFormValues) => {
    const { user: supabaseUser, error } = await supabase?.auth?.signIn({
      email,
      password,
    });
    if (error) {
      toast({
        position: "top",
        title: "Error!",
        description: error?.message,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } else {
      router.push("/");
      return supabaseUser;
    }
  };

  const onSignOut = async () => {
    return await supabase?.auth?.signOut();
  };

  return {
    error,
    user,
    session,
    setSession,
    onSignIn,
    onSignUp,
    onSignOut,
  };
};
