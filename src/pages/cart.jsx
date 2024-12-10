import { useCart } from "../ctx/cart-context";
import Product from "../components/product";

export default function Cart() {
  const { items, totalAmount } = useCart();
  console.log(items);
  

  return (
    <div>
      <main className="home cart">
        {items.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </main>
      <footer className="cart-footer">
        <h2>Total: ${totalAmount.toFixed(2)}</h2>
      </footer>
    </div>
  );
}