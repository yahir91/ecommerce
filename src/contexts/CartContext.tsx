import { useState, useEffect, createContext } from "react";
import { Cart } from "../api/cart";

const cartCtrl = new Cart();

export const CartContext = createContext("" as any);

export function CartProvider(props: any) {
  const { children } = props;
  const [cart, setCart] = useState(null);
  const [total, setTotal] = useState(cartCtrl.count());

  useEffect(() => {
    const response = cartCtrl.getAll();
    setCart(response);
  }, []);

  const addCart = (gameId: any) => {
    cartCtrl.add(gameId);
    refreshTotalCart();
  };

  const changeQuantityItem = (gameId: any, quantity: any) => {
    cartCtrl.changeQuantity(gameId, quantity);
    refreshTotalCart();
  };

  const deleteItem = (gameId: any) => {
    cartCtrl.delete(gameId);
    refreshTotalCart();
  };

  const deleteAllItems = () => {
    cartCtrl.deleteAll();
    refreshTotalCart();
  };

  const refreshTotalCart = () => {
    setTotal(cartCtrl.count());
    setCart(cartCtrl.getAll());
  };

  const data = {
    cart,
    addCart,
    total,
    deleteItem,
    deleteAllItems,
    changeQuantityItem,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
}
