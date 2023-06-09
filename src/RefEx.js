import { useState, useRef } from "react";

export default function RefEx() {
  const noInputRef = useRef(null);
  const [no, setNo] = useState("");

  const [recordedNos, setRecordedNos] = useState([
    5, 10, 15, 20, 15, 5, 10, 20,
  ]);

  const saveNo = () => {
    if (no === "") {
      alert("숫자를 입력해 주세요.");
      return;
    }

    setRecordedNos([...recordedNos, no]);
    setNo("");
    noInputRef.current.focus();
  };

  const removeNo = (index) => {
    const newRecordedNos = recordedNos.filter((el, _index) => _index !== index);
    setRecordedNos(newRecordedNos);
  };

  return (
    <>
      {" "}
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
      <button onClick={() => removeNo(0)}>인덱스 0 삭제</button>
      <hr />
      <button onClick={() => removeNo(1)}>인덱스 1 삭제</button>
      <hr />
      <button onClick={() => removeNo(2)}>인덱스 2 삭제</button>
      <hr />
      <button onClick={() => removeNo(3)}>인덱스 3 삭제</button>
    </>
  );
}
