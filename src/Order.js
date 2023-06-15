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

  const btnAllcheck = optionChecks.every((el) => el);

  const toggleAllCheck = () => {
    if (btnAllcheck) {
      // 전부 체크를 해제해야 함
      const newOptionchecks = optionChecks.map((el) => false);
      setOptionChecks(newOptionchecks);
    } else {
      // 전부 체크 해야 함
      const newOptionchecks = optionChecks.map((el) => true);
      setOptionChecks(newOptionchecks);
    }
  };

  return (
    <>
      <h1 style={{ paddingLeft: 35 }}>음식 주문</h1>

      <h2 style={{ paddingLeft: 35 }}>옵션</h2>

      <span
        style={{ paddingLeft: 35, userSelect: "none", cursor: "pointer" }}
        onClick={toggleAllCheck}
      >
        {btnAllcheck ? "[v]" : "[ ]"}전체선택
      </span>
      <ul style={{ paddingLeft: 35 }}>
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
