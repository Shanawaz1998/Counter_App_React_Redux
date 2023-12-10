import React from "react";
import { useSelector } from "react-redux";

export default function DisplayCounter() {
  const counterValue = useSelector((store) => store.counter);

  return (
    <div>
      <p className="lead mb-4">Counters current value is : {counterValue}</p>
    </div>
  );
}
