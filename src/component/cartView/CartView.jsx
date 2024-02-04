import { Link } from "react-router-dom";
import ItemCheckout from "../itemCheckout/ItemCheckout";
import PurchaseSummary from "../purchaseSummary/PurchaseSummary";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { CartContext } from "../../context/CartContext";
import EmtpyCart from "./EmtpyCart";

const CartView = () => {
    const { cart, totalCart, clearCart, removeItem } = useContext(CartContext);
    const { user } = useContext(UserContext);
    console.log("CART", totalCart)

    if (!user.email) return <h2>No hay usuario registrado</h2>
    if (cart.length === 0) return <EmtpyCart />


    return (
        <section className="container m-auto mt-5 pl-5  ">
            <h2 className="text-4xl font-semibold">Tu Compra</h2>
            <hr />
            <div className="flex ">

                <div className="w-2/3 ">
                    <ul>
                        {cart.map((item) => (
                            <li>
                                <ItemCheckout id={item.id} producto={item} removeItem={removeItem} />
                            </li>
                        ))}

                    </ul>
                </div>
                <div className="w-1/3 mt-3 ">

                    <PurchaseSummary total={totalCart} />

                </div>
            </div>
            <hr className="mt-3" />

        </section>
    );
};

export default CartView;