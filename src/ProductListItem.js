import React, { useState } from "react";

export default function ProductListItem({
  imgNo,
  productName,
  productPriceFormated,
  // 파라미터에 구조분해할당, 자동적으로 props가 적용됨
}) {
  /* 방법 2
  const { imgNo, productName, productPriceFormated } = props;
  */
  /* 방법 3
  // const imgNo = props.imgNo;
  // const productName = props.productName;
  // const productPriceFormated = props.productPriceFormated;
  */

  return (
    <>
      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <img src={`https://picsum.photos/id/${imgNo}/400/400`} />
        <div style={{ textAlign: "center", fontWeight: "bold", color: "gray" }}>
          {productName}
        </div>
        <div style={{ textAlign: "center", color: "gray" }}>
          {productPriceFormated}
        </div>
      </div>
    </>
  );
}
