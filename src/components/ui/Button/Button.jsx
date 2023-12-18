import React from "react";
import clsx from "clsx";
import "./Button.scss";

const Button = ({ text, variant = "default", className, ...props }) => {
  const VariantStyle = {
    default: "default-btn",
    link: "link",
    disabled: "disabled",
  };

  return (
    <button
      className={clsx([VariantStyle[variant]], className)}
      disabled={variant === "disabled"}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
