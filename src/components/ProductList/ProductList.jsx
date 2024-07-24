import ProductListItem from "../ProductListItem/ProductListItem";
import "./ProductList.css";
function ProductList(props) {
  return (
    <>
      <h2 className="product-list-header">Product List</h2>
      <div className="product-list-container">
        <ProductListItem productData={props.productData} />;
      </div>
    </>
  );
}

export default ProductList;
