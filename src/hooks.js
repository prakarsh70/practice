import React, { useState } from "react";
function Sample() {
  const [array, setArray] = useState([
    "arun",
    "abhishek",
    "akshaya",
    "jazib",
    "ankit",
    "kalaiselvan",
    "prakarsh"
  ]);
  return (
    <div>
      the array is:
      <p>{array}</p>
      {array.map((items) => {
        return <span>{items}</span>;
      })}
      {array.forEach((items) => {
        console.log(items);
        return { items };
      })}
      {array.filter((items) => {
        return items[0] === "a";
      })}
    </div>
  );
}
export default Sample;
