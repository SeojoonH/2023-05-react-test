import React, { useState, useRef } from "react";

export default function NoRecord() {
  const [recordedNos, setRecordedNos] = useState([]);
  const noInputRef = useRef(null);

  const saveNo = (form) => {
    form.no.value = form.no.value.trim();

    if (form.no.value.length === 0) {
      // NaN가 나오는 것을 방지하기 위한 조건문
      alert("숫자를 입력하세요.");
      return;
    }
    setRecordedNos([...recordedNos, form.no.value]);
    form.no.value = "";
    noInputRef.current.focus();
  };

  const li = recordedNos.map((el, index) => <li key={index}>{el}</li>);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          saveNo(e.target);
        }}
      >
        <input type="number" name="no" ref={noInputRef} />
        <button type="submit">기록</button>
      </form>
      <hr />
      <h1>기록된 숫자 v1</h1>
      기록된 숫자 : [{recordedNos.join(",")}]
      <hr />
      <h1>기록된 숫자 v2</h1>
      <ul>{li}</ul>
      <h1>기록된 숫자 v2-2</h1>
      <ul>
        {recordedNos.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </>
  );
}
