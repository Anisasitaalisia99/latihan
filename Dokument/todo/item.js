import React from "react";
const item = ({ todo, index, deletetodo }) => (
  <li>
    <input defaultValue={todo} readOnly />
    <button className="remove" onClick={() => deletetodo(todo)}>
      X
    </button>
  </li>
);
export default item;
