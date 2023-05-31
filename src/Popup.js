import React, { useState } from "react";

export default function Popup() {
  const border = "10px solid red";
  const [popupVisible, setPopupVisible] = useState(true);

  return (
    <>
      {popupVisible && (
        <button onClick={() => setPopupVisible(false)}>팝업 닫기</button>
      )}
      {popupVisible || (
        <button onClick={() => setPopupVisible(true)}>팝업 열기</button>
      )}
      <hr />
      {popupVisible && <div style={{ width: 100, height: 100, border }}></div>}
      <button className="btn text-xl">Button</button>
    </>
  );
}
