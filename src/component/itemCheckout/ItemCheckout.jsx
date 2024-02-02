import PurchaseSummary from "../purchaseSummary/PurchaseSummary"

const ItemCheckout = ({ imageUrl, title, price }) => {
    return (
        <>
            <div className="px-2 mt-3" >
                <div className="flex -mx-2">
                    <div className=" w-full max-w-3xl rounded-lg border border-gray-100 bg-white shadow-md ">
                        <div className="flex gird-cols-4 md:grid-cols-4 sm:grid-cols-4 gap-2">

                            <div className="overflow-hidden rounded-xl">
                                {/* Product Image */}
                                <img
                                    src="https://http2.mlstatic.com/D_NQ_NP_2X_652388-MLA54091535621_032023-F.webp"
                                    alt="Product-Image"
                                    className="object-contain md:max-h-40"
                                />
                            </div>
                            <div className="text-left pt-1">
                                <p className="text-black">
                                    {title} Remera Hombre Billabong Fundamental Neutral
                                </p>
                                <p>
                                    <label className="font-thin">Color: </label>
                                    <label className="font-thin">rojo, </label>
                                    <label className="font-thin">Talle: </label>
                                    <label className="font-thin">L</label>
                                </p>
                                <a href="#" className="text-blue-500 hover:text-blue-400" >Eliminar</a>
                            </div>

                            <div className="justify pt-1">
                                {/* Quantity Label */}
                                <input className="border border-gray-300 text-sm mb-1 outline-none rounded-md m-0  md:py-1 md:px-2 md:mb-0" type="number" defaultValue="1" required />
                                <label className="font-thin">Disponible: 10</label>
                            </div>
                            <div className="justify-between pt-1 pr-3">
                                {/* Product Price */}
                                <label className="text-xs text-black font-semibold sm:text-2xl">
                                    ${price}18.000
                                </label>
                            </div>


                        </div >
                    </div>

                </div>
            </div>


        </>



    )
}
export default ItemCheckout