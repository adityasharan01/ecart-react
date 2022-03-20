import React from "react";
import "./Radio.css";

function Radio({ value, label, name, checked, changeHandler }) {
  return (
    <div className="pb-1">
      <label htmlFor={value} className="radio">
        <input
          type="radio"
          id={value}
          name={name}
          value={value}
          checked={checked}
          onChange={changeHandler}
        />{" "}
        {label}
      </label>
    </div>
  );
}

export default Radio;
