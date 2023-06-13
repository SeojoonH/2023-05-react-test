import React, { useState, useEffect } from "react";

let AppCallCount = 0;

function App() {
  AppCallCount++;
  console.log(`AppCallCount : ${AppCallCount}`);
  const [no, setNo] = useState(0);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];

    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <>
      <div>
        <button className="btn btn-outline" onClick={() => setNo(no + 1)}>
          App 버튼 : {no}
        </button>
        <button className="btn btn-ontline" onClick={() => setIsDark(!isDark)}>
          테마토글
        </button>
        <hr />
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          culpa omnis sed excepturi asperiores? Aliquam totam modi officia neque
          id exercitationem necessitatibus repudiandae rem nesciunt, fugit nemo
          unde laborum nam.
        </div>
        <h1 className="color-primary">안녕, 반가워!</h1>
      </div>
    </>
  );
}

export default App;
