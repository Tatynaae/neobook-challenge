import clsx from "clsx";
import "./Input.scss";
import React from "react";

const Input = ({
  type,
  placeholder,
  variant = "default",
  className,
  label,
  icon
}) => {
  const [labeled, setLabeled] = React.useState(false);

  const variantStyles = {
    default: "default",
    background: "background",
  };

  const Labeled = () => {
    setLabeled(true);
  };
  const Blur = (e) => {
    e.target.value ? setLabeled(true) : setLabeled(false);
  }

  return (
    <div className="input-cover">
      <label htmlFor={label} className="label">
        {labeled ? label : ""}
      </label>
      <div className="input-with-icon">
        <input
          id={label}
          type={type}
          placeholder={labeled ? "" : placeholder}
          className={clsx([variantStyles[variant]], className)}
          onFocusCapture={Labeled}
          onBlur={(e) => Blur(e)}

        />
        {icon && (
          <div>{icon}</div>
        )}
      </div>
    </div>
  );
};

export default Input;
