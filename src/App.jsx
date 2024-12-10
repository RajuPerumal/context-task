import {Outlet, Route, Routes} from "react-router";
import "./App.css";
import AppBar from "./components/app-bar";
import CartProvider from "./ctx/cart-context.jsx";
import Cart from "./pages/cart";
import Home from "./pages/home";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route
          element={
            <>
              <AppBar />
              <Outlet />
            </>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
