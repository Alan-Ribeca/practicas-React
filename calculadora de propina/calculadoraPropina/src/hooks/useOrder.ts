/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import type { MenuItem, OrdenItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrdenItem[]>([]);

  const addItem = (item: MenuItem) => {
    
    const newItem = {...item, quantity: 1}
    setOrder([...order, newItem])

  }

  return {addItem}
}
