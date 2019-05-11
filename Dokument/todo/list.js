import React from "react";
//fungsional componen

const list = ({ title, children }) => (
  <div style={{ padding: "10px" }}>
    <i>{title}</i>
    {children}
  </div>
);
export default list;
