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

  const removeNo5 = () => {
    const newRecordedNos = recordedNos.filter((el) => el !== 5);
    setRecordedNos(newRecordedNos);
  };

  const removeLast = () => {
    setRecordedNos(
      recordedNos.filter((_, index) => index !== recordedNos.length - 1)
    );
  };

  const removeFirst = () => {
    setRecordedNos(recordedNos.filter((_, index) => index !== 0));
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
      <button onClick={removeNo5}>숫자 5 삭제</button>
      <button onClick={removeFirst}>첫 숫자 삭제</button>
      <button onClick={removeLast}>마지막 숫자 삭제</button>
    </>
  );
}
