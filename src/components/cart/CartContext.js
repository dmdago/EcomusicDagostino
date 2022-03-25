import React, { useContext, useState } from "react";

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = function ({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = function (quantity, id) {
    if (quantity > 0) {
      const item = [...items, { productId: id, quantity: quantity }];
      setItems(item);
      console.log(items);
    } else {
      alert("Seleccione una cantidad");
    }
  };

  const removeItem = function (id) {
    if (items.length > 0) {
      const updateItems = items.filter(function (item) {
        return item.productId !== id;
      });
      setItems(updateItems);
    }
  };

  return (
    <CartContext.Provider value={{ items, addToCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
