import React from "react";
import "./input.css";
const Input = ({ placeholder, input_ref }) => {
  const [value, setValue] = React.useState(null);

  const onChange = (e) => {
    if (e.target.value) {
      setValue(e.target.value);
    } else {
      setValue(null);
    }
  };
  return (
    <input
      className="input"
      placeholder={placeholder}
      ref={input_ref}
      value={value}
      onChange={onChange}
    />
  );
};
export default Input;
