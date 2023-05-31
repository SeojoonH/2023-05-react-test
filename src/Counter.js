import React, { useState } from "react";

export default function Counter() {
  const [no, setNo] = useState(0);

  const noIsEvenDiv = (
    <>
      <hr />
      {no % 2 === 0 ? <div>짝수입니다!</div> : <div>홀수입니다!</div>}
    </>
  );
  // no % 2 === 0 ? (
  //   <>
  //     <hr />
  //     <span>짝수입니다.</span>
  //   </>
  // ) : (
  //   <>
  //     <hr />
  //     <span>홀수입니다.</span>
  //   </>
  // );

  // 짝수, 홀수에 따라 글 다르게 나오는 효과 (삼항연산자 사용)

  const noIsNot8MultipleDiv = no % 8 === 0 || (
    <>
      <hr />
      <span>8의 배수가 아닙니다.</span>
    </>
  );
  // 8의 배수에 문구가 나오게 함
  // 앞의 연산이 참일 때 뒷 문구가 실행된다.

  return (
    <>
      숫자 : {no}
      <hr />
      <button onClick={() => setNo(no + 1)}>증가</button>
      {noIsEvenDiv}
      {noIsNot8MultipleDiv}
    </>
  );
}
