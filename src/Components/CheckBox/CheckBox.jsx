import React from "react";
import "./CheckBox.css";

function CheckBox({ type, checked, changeHandler }) {
  return (
    <div className="pb-1">
      <label htmlFor={type} className="checkbox">
        <input
          type="checkbox"
          id={type}
          checked={checked}
          onChange={changeHandler}
        />{" "}
        {type}
      </label>
    </div>
  );
}

export default CheckBox;
