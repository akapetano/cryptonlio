import { useState } from "react";

export const useSearch = () => {
  const [search, setSearch] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return { search, onChange };
};
