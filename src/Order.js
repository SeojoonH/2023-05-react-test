import React, { useState, useMemo } from "react";

function OrderMainFood({ mainFoodCount, setMainFoodCount }) {
  return (
    <>
      <h2>메인 (수량 : {mainFoodCount}))</h2>
      <div>
        <button onClick={() => setMainFoodCount(mainFoodCount + 1)}>
          증가
        </button>
        <button
          onClick={() =>
            setMainFoodCount(mainFoodCount === 1 ? 1 : mainFoodCount - 1)
          }
        >
          감소
        </button>
      </div>
    </>
  );
}

function OrderOptions({
  selectedCount,
  options,
  toggleAllCheck,
  btnAllcheck,
  optionChecks,
  toggleOptionCheck,
}) {
  return (
    <>
      <h2>
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

export default function Order() {
  const [mainFoodCount, setMainFoodCount] = useState(1);
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

  const [optionChecks, setOptionChecks] = useState(
    new Array(options.length).fill(false)
  );

  const toggleOptionCheck = (index) => {
    const newOptionchecks = optionChecks.map((el, _index) =>
      _index === index ? !el : el
    );
    setOptionChecks(newOptionchecks);
  };

  const btnAllcheck = useMemo(
    () => optionChecks.every((el) => el),
    [optionChecks]
  );
  const selectedCount = useMemo(
    () => optionChecks.filter((el) => el).length,
    [optionChecks]
  );

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
      <h1>음식 주문</h1>

      <OrderMainFood
        setMainFoodCount={setMainFoodCount}
        mainFoodCount={mainFoodCount}
      />
      <OrderOptions
        selectedCount={selectedCount}
        options={options}
        toggleAllCheck={toggleAllCheck}
        btnAllcheck={btnAllcheck}
        optionChecks={optionChecks}
        toggleOptionCheck={toggleOptionCheck}
      />
    </>
  );
}
