import { SetStateAction, useState } from "react";

export const useFormControl = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => setInput(event.target.value);

  const isError = input === "";

  return { input, setInput, handleInputChange, isError };
};
