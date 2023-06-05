import ProductListItem from "./ProductListItem";

function App() {
  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        <ProductListItem
          imgNo={1}
          productName="MAC BOOK AIR 14"
          productPriceFormated={"1,700,000원"}
        />
        <ProductListItem
          imgNo={2}
          productName="MAC BOOK PRO 14"
          productPriceFormated={"2,700,000원"}
        />
        <ProductListItem
          imgNo={201}
          productName="MAC BOOK PRO 16"
          productPriceFormated={"3,200,000원"}
        />
      </div>
    </>
  );
}

export default App;
