

const ItemCheckout = ({ id, producto, removeItem }) => {
    const { nombre, precio, imgUrl, selected, cantidad } = producto
    console.log("AAAAAA", producto)
    return (
        <>
            <div className="px-2 mt-3" >
                <div className="flex -mx-2">
                    <div className=" w-full max-w-3xl rounded-lg border border-gray-100 bg-white shadow-md ">
                        <div className="flex gird-cols-4 md:grid-cols-4 sm:grid-cols-4 gap-2">

                            <div className="overflow-hidden rounded-xl">
                                {/* Product Image */}
                                <img
                                    src={imgUrl}
                                    alt="Product-Image"
                                    className="object-contain md:max-h-40"
                                />
                            </div>
                            <div className="text-left pt-1">
                                <p className="text-black">
                                    {nombre}
                                </p>
                                <p>
                                    <label className="font-thin">Color: </label>
                                    <label className="font-thin">{selected.color}, </label>
                                    <label className="font-thin">Talle: </label>
                                    <label className="font-thin">{selected.talle}</label>
                                </p>
                                <button onClick={() => removeItem(producto.id)}>Eliminar</button>
                            </div>

                            <div className="justify pt-1">
                                {/* Quantity Label */}
                                <label className="font-thin">Cantidad: </label>
                                <label className="font-thin">{cantidad}</label>
                            </div>
                            <div className="justify-rig pt-1 pr-3">
                                {/* Product Price */}
                                <label className="text-xs text-black font-semibold sm:text-2xl text-right">
                                    ${precio}
                                </label>
                            </div>
                        </div>

                    </div >
                </div>

            </div>


        </>



    )
}
export default ItemCheckout