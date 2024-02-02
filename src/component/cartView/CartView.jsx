import { Link } from "react-router-dom";
import Boton from "../buttons/boton";
import ItemCheckout from "../itemCheckout/ItemCheckout";

const CartView = () => {
    // const { cart, totalCart, clearCart, removeItem } = useContext(CartContext);
    // const { user } = useContext(UserContext);


    //if (cart.length === 0) return <EmtpyCart />


    return (
        <section className="container m-auto mt-5 pl-5">
            <p>Bienvenido: </p>
            <h2 className="text-4xl font-semibold">Tu Compra</h2>
            <hr />

            <ul>

                <li><ItemCheckout /></li>
                <li><ItemCheckout /></li>

            </ul>

            <h4 className="text-4xl font-semibold">TOTAL: $1000</h4>
            <Boton >Vaciar carrito</Boton>
            <Boton><Link to="/checkout">Terminar mi compra</Link></Boton>
        </section>
    );
};

export default CartView;