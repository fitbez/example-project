import Button from "../Button/Button";
import ProductListItem from "../ProductListItem/ProductListItem";
import "./ProductList.css";

function ProductList(props) {
  const moreThanThreeProduct = props.productData.length > 3;
  return (
    <>
      <h2 className="product-list-header">Product List</h2>
      <div className="product-list-container">
        <ProductListItem productData={props.productData} />;
      </div>
      <Button
        value={moreThanThreeProduct ? "View Less" : "View More"}
        backgroundColor="#11CCF4"
        color="#fff"
        handleClick={
          moreThanThreeProduct
            ? props.handleViewLessProduct
            : props.handleProduct
        }
      />
    </>
  );
}

export default ProductList;
