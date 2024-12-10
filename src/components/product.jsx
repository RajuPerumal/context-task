import { useCart } from "../ctx/cart-context";

export default function Product({ product }) {
  const { items, addItem, decrementQuantity } = useCart();
  const cartItem = items.find((item) => item.id === product.id);

  return (
    <div className="product">
      <img src={product.image} width="100" alt="" />
      <div className="product-info">
        <div className="row-1">
          <h3 style={{ marginRight: "auto" }}>{product.title}</h3>
          <b style={{ marginLeft: "10px" }}>${product.price}</b>
        </div>
        <div className="row-2">
          <div style={{ width: '60%'}}>
            <b className="category">{product.category}</b>
            <p className="description">{product.description}</p>
          </div>
          {cartItem ? (
            <div className="quantity">
              <button
                className="count-buttons ml"
                onClick={() =>
                  decrementQuantity(product.id, cartItem ?? product)
                }
              >
                -
              </button>
              <span style={{ margin: "0 10px 0 10px" }}>
                {cartItem.quantity}
              </span>
              <button
                className="count-buttons"
                onClick={() => addItem(cartItem)}
              >
                +
              </button>
            </div>
          ) : (
            <button
              className="count-buttons ml"
              onClick={() => addItem({ ...product })}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
