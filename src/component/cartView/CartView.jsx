import { Link } from "react-router-dom";
import Boton from "../buttons/boton";
import ItemCheckout from "../itemCheckout/ItemCheckout";
import PurchaseSummary from "../purchaseSummary/PurchaseSummary";

const CartView = () => {
    // const { cart, totalCart, clearCart, removeItem } = useContext(CartContext);
    // const { user } = useContext(UserContext);


    //if (cart.length === 0) return <EmtpyCart />


    return (
        <section className="container m-auto mt-5 pl-5">
            <p>Bienvenido: </p>
            <h2 className="text-4xl font-semibold">Tu Compra</h2>
            <hr />
            <div className="flex ">

                <div className="w-2/3 ">
                    <ul>

                        <li><ItemCheckout /></li>
                        <li><ItemCheckout /></li>

                    </ul>
                </div>
                <div className="w-1/3 mt-3 ">

                    <PurchaseSummary />

                </div>
            </div>
            <hr className="mt-3" />

        </section>
    );
};

export default CartView;