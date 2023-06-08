import NoRecord from "./NoRecord";

function App() {
  const fun1 = () => {
    console.log("fun1 실행됨.");
  };

  const fun2 = (a, b) => {
    console.log(`fun2 실행됨 : ${a}, ${b}`);
  };
  return (
    <>
      <button onClick={fun1}>함수1</button>
      <button onClick={() => fun2(1, 2)}>함수2</button>
    </>
    // 넘어가는 값이 있을 경우 꼭 arrowFunction 형태로 써 줘야 함
    // 해당 형태가 아닐 경우, 바로 연결 되지 않기 때문
  );
}

export default App;
