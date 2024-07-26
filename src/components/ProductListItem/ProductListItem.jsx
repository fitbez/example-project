import "./ProductListItem.css";

function ProductListItem(props) {
  return props.productData.map((product, index) => {
    return (
      <div key={index} className="card">
        <img src={product.image} alt="" className="product-img" />
        <div className="product-content">
          <p className="product-name">
            <strong>{product.title.slice(0, 30)}</strong>
          </p>
          <p className="product-description">
            {product.description.slice(0, 30)}
          </p>
          <p className="product-price">
            <strong>${product.price}</strong>
          </p>
        </div>
      </div>
    );
  });
}

export default ProductListItem;
