import React, { useContext, useState } from "react";

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = function ({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = function (productId, name, brand, price, quantity) {
    if (quantity > 0) {
      const currentItem = { productId, name, brand, price, quantity };

      const foundItem = items.find(
        (o) => o.productId === currentItem.productId
      );

      if (foundItem) {
        const itemsUpdated = items.map((_item) =>
          _item.productId === currentItem.productId
            ? {
                ..._item,
                quantity: _item.quantity + currentItem.quantity,
              }
            : _item
        );

        setItems(itemsUpdated);
      } else {
        setItems((prevItem) => [...prevItem, currentItem]);
      }
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

  const clear = function (a) {
    setItems([]);
  };

  return (
    <CartContext.Provider value={{ items, addToCart, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
};
