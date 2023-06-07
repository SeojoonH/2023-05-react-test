import ProductListItem from "./ProductListItem";

export default function ProductList() {
  return (
    <>
      <ul className="grid grid-cols-4 gap-x-[20px] gap-y-[20px]">
        <li>
          <ProductListItem imgNo={1} name="PRODUCT 1" price={"100,000"} />
        </li>
        <li>
          <ProductListItem imgNo={2} name="PRODUCT 2" price={"200,000"} />
        </li>
        <li>
          <ProductListItem imgNo={3} name="PRODUCT 3" price={"300,000"} />
        </li>
        <li>
          <ProductListItem imgNo={4} name="PRODUCT 4" price={"400,000"} />
        </li>
        <li>
          <ProductListItem imgNo={5} name="PRODUCT 5" price={"500,000"} />
        </li>
        <li>
          <ProductListItem imgNo={6} name="PRODUCT 6" price={"600,000"} />
        </li>
      </ul>
    </>
  );
}
