import React, { useState } from "react";
import classnames from "https://cdn.skypack.dev/classnames";

function NotifyOnce({ children }) {
  const [visible, setVisible] = useState(false);
  const [workDone, setWorkDone] = useState(false);

  if (workDone === false) {
    setTimeout(function () {
      setVisible(true);
    }, 1000);

    setTimeout(function () {
      setVisible(false);
    }, 3000);

    setWorkDone(true);
  }

  return (
    <div
      className={classnames(
        "fixed transition-all right-[10px]",
        {
          "top-[-60px]": !visible,
        },
        {
          "top-[-10px]": visible,
        }
      )}
    >
      {children}
    </div>
  );
}

function Alert({ color: _color, children }) {
  const color = _color ?? "white";
  return (
    <div className="alert alert-info">
      <div className={`text-${color}`}>
        <span>
          <i className="fa-solid fa-circle-info"></i>
        </span>
        <span>{children}</span>
      </div>
    </div>
  );
}

// const color = _color ?? "white";
// 컬러가 있으면 컬러대로, 컬러가 없다면 white로.

function App() {
  return (
    <>
      <NotifyOnce>
        <Alert>안녕하세요!</Alert>
      </NotifyOnce>

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
        tempora eligendi perferendis fuga rem cumque vel sed iure, est tempore
        laborum molestiae repudiandae corrupti quidem! Quos alias illo quidem
        veniam.
      </div>
    </>
  );
}

export default App;
