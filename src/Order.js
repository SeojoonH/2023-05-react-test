import React, { useState } from "react";

export default function Order() {
  const options = [
    "사이다 1.5",
    "스위트칠리 소스",
    "머스타드 소스",
    "마라 소스",
    "랜치 소스",
  ];

  const [optionChecks, setOptionChecks] = useState([
    false,
    true,
    false,
    false,
    true,
  ]);

  const toggleOptionCheck = (index) => {
    const newOptionchecks = optionChecks.map((el, _index) =>
      _index === index ? !el : el
    );
    setOptionChecks(newOptionchecks);
  };

  return (
    <>
      <h1>음식 주문</h1>
      <ul>
        {options.map((option, index) => (
          <li
            style={{ userSelect: "none", cursor: "pointer" }}
            key={option}
            onClick={() => toggleOptionCheck(index)}
          >
            {optionChecks[index] ? "[v]" : "[ ]"}
            {option}
          </li>
        ))}
      </ul>
    </>
  );
}
