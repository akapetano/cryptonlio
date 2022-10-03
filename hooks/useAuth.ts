import { Session, User } from "@supabase/supabase-js";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  ISignUpFormValues,
  ILoginFormValues,
  IResetPasswordFormValues,
} from "../types/auth";
import { useUser } from "@supabase/auth-helpers-react";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { useToast } from "@chakra-ui/react";
import { ApiError } from "next/dist/server/api-utils";

export const useAuth = () => {
  const [session, setSession] = useState<Session | null>(null);
  const { user, error } = useUser();
  const router = useRouter();
  const toast = useToast();

  const onSignUp = async ({
    firstName,
    lastName,
    email,
    password,
    passwordConfirmation,
    favoriteCrypto,
    selectAvatar,
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
          favoriteCrypto,
          selectAvatar,
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
          "Thanks for signing up - just one more step to exploration. Verify your email address by clicking the link in your confirmation email.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      setSession(supabaseSession);

      if (user) {
        router.push("/sign-in");
      }
      return { user, session };
    }
  };

  const onSignIn = async ({ email, password }: ILoginFormValues) => {
    const { user: supabaseUser, error } = await supabaseClient?.auth?.signIn({
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

  const handleSignOut = async () => {
    const { error } = await supabaseClient?.auth?.signOut();
    if (error instanceof ApiError) {
      toast({
        position: "top",
        title: "Error!",
        description: error?.message,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } else {
      router.push("/sign-in");
    }
  };

  const onForgotPassword = async ({ email }: IResetPasswordFormValues) => {
    const { data, error } =
      await supabaseClient?.auth?.api?.resetPasswordForEmail(email);
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
          "Link successfully sent to your email address. Click the link to reset your password.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  const userAvatar = `https://avatars.dicebear.com/api/${user?.user_metadata?.selectAvatar}/${user?.user_metadata?.favoriteCrypto}.svg`;

  return {
    error,
    user,
    userAvatar,
    session,
    setSession,
    onSignIn,
    onSignUp,
    onForgotPassword,
    handleSignOut,
  };
};
