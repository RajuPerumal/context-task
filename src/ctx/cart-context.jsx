import { createContext, useState, useContext } from "react";

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  decrementQuantity: (id) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

export const useCart = () => useContext(CartContext);

export default function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItem = (item) => {
    const newItems = items.filter((i) => i.id !== item.id);
    if (item.quantity) {
      item.quantity = item.quantity + 1;
    } else {
      item.quantity = 1;
    }
    setItems([...newItems, item]);
    setTotalAmount((prevAmount) => prevAmount + item.price);
  };

  const decrementQuantity = (id, item) => {
    if (item.quantity === 1) {
      removeItem(id, item);
    } else {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
    setTotalAmount((prevAmount) => prevAmount - item.price);
  };

  const removeItem = (id, item) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    setTotalAmount((prevAmount) => prevAmount - item.price);
  };

  const clearCart = () => {
    setItems([]);
    setTotalAmount(0);
  };

  return (
    <CartContext.Provider
      value={{
        items: items,
        totalAmount,
        addItem,
        removeItem,
        clearCart,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
