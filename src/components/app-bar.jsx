import {Link} from "react-router";
import cartImage from "../assets/cart.svg";
import { useCart } from "../ctx/cart-context";

export default function AppBar() {
  const { items } = useCart();
  console.log(items);
  

  return (
    <header className="header">
      <h1 className="title">React Shop</h1>
      <Link to="/cart">
        {items.length > 0 && <span className="cart-count">{items.length}</span>}
        <img src={cartImage} alt="" width={30} height={30} />
      </Link>
    </header>
  );
}
