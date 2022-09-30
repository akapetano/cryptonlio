import { Burger } from "./Burger/Burger";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import { Flex, FlexProps } from "@chakra-ui/react";
import { useUser } from "@supabase/auth-helpers-react";
import { useAuth } from "../../../../hooks/useAuth";
import { useState } from "react";

export const MobileNavigation = ({ ...restProps }: FlexProps) => {
  const [isopen, setisopen] = useState(false);
  const { user } = useUser();
  const { handleSignOut, userAvatar } = useAuth();

  return (
    <Flex {...restProps}>
      <Burger isopen={isopen ? isopen : undefined} setisopen={setisopen} />
      <MobileMenu
        user={user}
        isopen={isopen ? isopen : undefined}
        handleSignOut={handleSignOut}
        userAvatar={userAvatar}
      />
    </Flex>
  );
};
