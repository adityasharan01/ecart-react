import React from "react";
import './Button.css';

function Button({ children, class_name, disabled, clickHandler }) {
  return (
    <button className={class_name} disabled={disabled} onClick={clickHandler}>
      {children}
    </button>
  );
}

export default Button;
