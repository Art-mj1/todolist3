import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const initial = () => {
    setValue("");
  };
  return [value, onChange, initial];
};
export default useInput;
