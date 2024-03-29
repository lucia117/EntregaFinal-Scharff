import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Size from "../size/Size"
import Color from "../color/Color"
import Boton from "../buttons/boton";
import QuantitySelector from "../quantitySelector/QuantitySelector";



const ItemDetail = ({ product }) => {
    const { nombre, descripcion, imgUrl, precio, color, stock, categoria, tipo, genero } = product
    const navigate = useNavigate()
    const [cantidad, setCantidad] = useState(1)
    const { addToCart, isInCart } = useContext(CartContext)

    const handleVolver = () => {
        navigate(-1)
    }

    const [colorSelec, setColorSelec] = useState(color[0])
    const [talleByColor, setTalleByColor] = useState([])
    const [talleSelect, setTalleSelec] = useState([])
    const [stockSelect, setStockSelec] = useState([])

    const handleAgregar = () => {
        const itemToCart = {
            ...product,
            selected: {
                color: colorSelec,
                talle: talleSelect
            },
            cantidad,
        }
        addToCart(itemToCart)
    }


    useEffect(() => {
        const talles = Object.keys(stock[colorSelec])
        setTalleByColor(talles)
        const t = Object.keys(stock[colorSelec])
        setTalleSelec(t[0])


    }, [colorSelec])

    useEffect(() => {
        setStockSelec(stock[colorSelec][talleSelect])

    }, [talleSelect])

    return (


        <div className="p-3 max-w-5xl  m-auto bg-white">
            <div>
                <a onClick={handleVolver}> Volver</a>
                <span> | {categoria}/{genero}/{tipo}</span>

            </div>
            <div className=" sm:mt-10">
                <div>
                    <div className="flex gird-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-9 ">
                        {/* Product Image */}
                        <div className="rounded-xl">
                            <img
                                src={imgUrl}
                                alt="Product-Image"
                                className="object-scale-down"
                            />
                        </div>
                        {/* Product Details */}
                        <div className="flex flex-col justify-between text-left">
                            <div>
                                {/* Product Title */}
                                <h1 className="text-3xl text-black font-semibold sm:text-4xl">
                                    {nombre}
                                </h1>

                                {/* Product Description */}
                                <p className="mt-3 text-gray-600 text-md leading-6 text-justify sm:text-left sm:mt-4">
                                    {descripcion}
                                </p>

                                {/* Product Price */}
                                <span className="text-xl text-black font-semibold sm:text-2xl">
                                    ${precio}
                                </span>

                                {/* Color select*/}
                                <Color colors={color} handleClick={setColorSelec} colorSelected={colorSelec} />

                                {/* Size select */}

                                <Size size={talleByColor} handleClick={setTalleSelec} talleSelected={talleSelect} />

                                <div className=" ">
                                    <div className="text-center flex flex-col gap-2 w-full">
                                        {/* Buy button */}
                                        {
                                            isInCart(product.id)
                                                ? <Boton><Link to="/cart">Terminar mi compra</Link></Boton>
                                                : <>
                                                    <QuantitySelector cantidad={cantidad} stock={stockSelect} setCantidad={setCantidad} ></QuantitySelector>
                                                    <Boton onClick={handleAgregar} disabled={product.stock === 0}>Agregar al carrito</Boton>

                                                </>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default ItemDetail