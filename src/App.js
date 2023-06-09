import { useState, useRef } from "react";
import NoRecord from "./NoRecord";

function App() {
  const formInputNoRef = useRef(null);
  // ref는 리랜더링이 되지 않음
  const [no, setNo] = useState("");

  const notice = () => {
    formInputNoRef.current.focus();

    if (!no) {
      alert("숫자를 입력해주세요.");
      return;
    }

    alert(`당신이 입력한 숫자는 ${no}입니다.`);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          notice();
        }}
      >
        <input
          ref={formInputNoRef}
          type="text"
          placeholder="숫자"
          value={no}
          onChange={(e) => setNo(e.target.value)}
        />
        <button>실행</button>
      </form>
      <hr />
      <NoRecord />
    </>
  );
}
export default App;
