import OutlineButton from "../buttons/outlineButton"
import ColorButton from "../buttons/colorButton"

const ItemDetail = ({ imageUrl, title, description, price, quantity }) => {
    return (
        <div>
            <div className="p-3 max-w-5xl m-auto bg-white">
                <div className=" sm:mt-10">
                    <div>
                        <div className="flex gird-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-9 ">
                            {/* Product Image */}
                            <div className="rounded-xl">
                                <img
                                    src={imageUrl}
                                    alt="Product-Image"
                                    className="object-scale-down  "
                                />
                            </div>
                            {/* Product Details */}
                            <div className="flex flex-col justify-between text-left">
                                <div>
                                    {/* Product Title */}
                                    <h1 className="text-3xl text-black font-semibold sm:text-4xl">
                                        {title} Remera Hombre Billabong Fundamental Neutral

                                    </h1>
                                    {/* Product Description */}
                                    <p className="mt-3 text-gray-600 text-md leading-6 text-justify sm:text-left sm:mt-4">
                                        {description} Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna.
                                    </p>

                                    {/* Product Price */}
                                    <span className="text-xl text-black font-semibold sm:text-2xl">
                                        ${price}18.000
                                    </span>
                                    {/* Color select*/}
                                    <div className=" ">
                                        <div className="text-left flex flex-col gap-2 w-full">
                                            <label className="font-thin">Color</label>
                                            <div>
                                                <ColorButton color={"red"} />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Size Button */}
                                    <div className=" py-2">
                                        <div className="text-left flex flex-col gap-2 w-full">
                                            <label className="font-thin">Talle</label>
                                            <div>
                                                <OutlineButton text={"xs"} />
                                                <OutlineButton text={"s"} />
                                                <OutlineButton text={"m"} />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="py-2">
                                        <div className="text-left flex gap-2 w-full">
                                            {/* Quantity Label */}
                                            <label className="font-thin">Cantidad: </label>
                                            <input className="border border-gray-300 text-sm mb-1 outline-none rounded-md m-0  md:py-1 md:px-2 md:mb-0" type="number" defaultValue="1" required />
                                            <label className="font-thin">Disponible: 10</label>
                                        </div>
                                    </div>

                                    {/* Quantity Input and Order Button */}
                                    <div className=" ">
                                        <div className="text-center flex flex-col gap-2 w-full">
                                            {/* Buy button */}
                                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                                                Agregar al carrito
                                            </button>

                                        </div>
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

/* https://medium.com/@ryaddev/how-to-create-product-details-component-with-react-and-tailwindcss-96fc4c45230e */