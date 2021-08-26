import React from "react";
import "./button.css";
const Button = ({ is_selected, children, onClick }) => {
  const [button_class, setButtonClass] = React.useState("button");

  React.useEffect(() => {
    setButtonClass(() => {
      return ["button", (is_selected && "selected") || ""].join(" ");
    });
  }, [is_selected]);
  return (
    <button className={button_class} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
