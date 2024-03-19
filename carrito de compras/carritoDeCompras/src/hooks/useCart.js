import { useState, useEffect, useMemo } from "react";
import { db } from "../data/db";


export const useCart = () => {
    const initialCart = () => {
        const localStorageCart = localStorage.getItem("cart");
        return localStorageCart ? JSON.parse(localStorageCart) : [];
    };

    const [data] = useState(db);
    const [cart, setCart] = useState(initialCart);

    const minItem = 1;
    const maxItem = 5;

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    function addToCart(item) {
        const itemExist = cart.findIndex((guitar) => guitar.id === item.id);
        if (itemExist >= 0) {
            if (cart[itemExist].quantity >= maxItem) return;
            const copiaCart = [...cart];
            copiaCart[itemExist].quantity++;
            setCart(copiaCart);
        } else {
            item.quantity = 1;
            setCart([...cart, item]);
        }
    }

    function removeFromCart(id) {
        setCart((prevCart) => prevCart.filter((guitar) => guitar.id !== id));
    }

    function decrementarCantidad(id) {
        const actualizarCarrtio = cart.map((item) => {
            if (item.id === id && item.quantity > minItem) {
                return {
                    ...item,
                    quantity: item.quantity - 1,
                };
            }
            return item;
        });
        setCart(actualizarCarrtio);
    }

    function incrementarCantidad(id) {
        const updatedCart = cart.map((item) => {
            if (item.id === id && item.quantity < maxItem) {
                return {
                    ...item,
                    quantity: item.quantity + 1,
                };
            }
            return item;
        });
        setCart(updatedCart);
    }

    function vaciarCarrito() {
        setCart([]);
    }

    const isEmpty = useMemo(() => cart.length === 0, [cart])
    const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.price), 0), [cart])

    return {
        data, cart, addToCart, removeFromCart, incrementarCantidad, decrementarCantidad, vaciarCarrito, isEmpty, cartTotal
    }
}