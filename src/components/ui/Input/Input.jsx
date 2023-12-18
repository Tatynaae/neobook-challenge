import React, { forwardRef } from "react";
import clsx from "clsx";

import "./Input.scss";

export const Input = forwardRef(
  (
    {
      type,
      placeholder,
      variant = "default",
      className,
      label,
      icon,
      ...props
    },
    ref
  ) => {
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
    };

    return (
      <div className="input-cover">
        <label htmlFor={label} className="label">
          {labeled ? label : ""}
        </label>
        <div className="input-with-icon">
          <input
            {...props}
            ref={ref}
            id={label}
            type={type}
            placeholder={labeled ? "" : placeholder}
            className={clsx([variantStyles[variant]], className)}
            onFocusCapture={Labeled}
            onBlur={(e) => Blur(e)}
          />
          {icon && <div>{icon}</div>}
        </div>
      </div>
    );
  }
);

Input.displayName = "AppInput";
