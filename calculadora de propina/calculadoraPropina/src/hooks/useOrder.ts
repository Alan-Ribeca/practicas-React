/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import type { MenuItem, OrdenItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrdenItem[]>([]);
  const [tip, setTip] = useState(0);

  const addItem = (item: MenuItem) => {
    const itemExist = order.find((ordenItem) => ordenItem.id === item.id);

    if (itemExist) {
      const updateOrden = order.map((ordenItem) =>
        ordenItem.id === item.id
          ? { ...ordenItem, quantity: ordenItem.quantity + 1 }
          : ordenItem
      );
      setOrder(updateOrden);
    } else {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  const removeItem = (id: MenuItem["id"]) => {
    setOrder(order.filter((item) => item.id !== id));
  };


  const placeOrder = () => {
    setOrder([])
    setTip(0)
  }

  return { order, tip, setTip, addItem, removeItem, placeOrder};
}
