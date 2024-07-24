import "./ProductListItem.css";

function ProductListItem(props) {
  return props.productData.map((product) => {
    return (
      <div key={product.id} className="card">
        <img src={product.image} alt="" className="product-img" />
        <div className="product-content">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <p className="product-price">
            <strong>${product.price}</strong>
          </p>
        </div>
      </div>
    );
  });
}

export default ProductListItem;
