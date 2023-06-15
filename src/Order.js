import React, { useState } from "react";

export default function Order() {
  const options = [
    "칠성사이다",
    "칠성사이다 제로",
    "코카콜라",
    "코카콜라 제로",
    "스위트칠리 소스",
    "머스타드 소스",
    "마라 소스",
    "랜치 소스",
  ];

  // [false, false, false, false, false, false]
  // [, , , , , ,]
  // new Array(6).fill(false)
  // new Array(options.length).fill(false)

  const [optionChecks, setOptionChecks] = useState(
    new Array(options.length).fill(false)
  );

  const toggleOptionCheck = (index) => {
    const newOptionchecks = optionChecks.map((el, _index) =>
      _index === index ? !el : el
    );
    setOptionChecks(newOptionchecks);
  };

  const btnAllcheck = optionChecks.every((el) => el);
  const selectedCount = optionChecks.filter((el) => el).length;

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

      <h2 style={{ paddingLeft: 35 }}>
        옵션 ( {selectedCount} / {options.length})
      </h2>

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
