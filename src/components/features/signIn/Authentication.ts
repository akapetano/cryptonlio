import { useState } from "react";
import { supabase } from "../../../../utils/supabaseClient";

export const Auth = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState()
}