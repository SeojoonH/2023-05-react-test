import React, { useState } from "react";
import NoRecord from "./NoRecord";

function App() {
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);

  setTimeout(() => {
    setArr([...arr, arr.length + 1]);
  }, 1000);

  return (
    <>
      <NoRecord />
      {arr.join(",")}
    </>
  );
}

export default App;
