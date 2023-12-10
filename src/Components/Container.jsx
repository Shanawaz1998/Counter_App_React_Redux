import React from "react";

export default function Container({ children }) {
  return (
    <center className="card" style={{ width: "70%" }}>
      <div className="card-body">{children}</div>
    </center>
  );
}
