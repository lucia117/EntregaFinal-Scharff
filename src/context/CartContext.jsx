import { createContext, useState } from "react";

// Creamos un contexto para compartir el estado del carrito entre componentes
export const CartContext = createContext();

// Proveedor de contexto que contendrá el estado del carrito y las funciones relacionadas
export const CartProvider = ({ children }) => {

    // Estado del carrito, inicializado como un array vacío
    const [cart, setCart] = useState([]);

    // Función para agregar un artículo al carrito
    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    // Función para verificar si un artículo está en el carrito según su ID
    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    };

    // Función para limpiar todo el contenido del carrito
    const clearCart = () => {
        setCart([]);
    };

    // Función para obtener la cantidad total de artículos en el carrito
    const itemsInCart = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0);
    };

    // Función para calcular el precio total del carrito
    const totalCart = () => {
        return cart.reduce((acc, item) => acc + (item.cantidad * item.precio), 0);
    };

    // Función para eliminar un artículo del carrito según su ID
    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    // Proporcionamos el contexto con el estado del carrito y las funciones relacionadas
    return (
        <CartContext.Provider value={{
            cart,
            isInCart,
            addToCart,
            clearCart,
            itemsInCart,
            totalCart,
            removeItem
        }}>
            {children}
        </CartContext.Provider>
    );
};

