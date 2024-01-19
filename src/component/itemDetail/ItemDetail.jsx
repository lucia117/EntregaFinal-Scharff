const ItemDetail = () => {
    return (
        <div>
            <div className="p-3 max-w-7xl m-auto">
                <div className="mt-6 sm:mt-10">
                    <div>
                        <div className="grid gird-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max">
                            {/* Product Image */}
                            <div className="overflow-hidden rounded-xl">
                                <img
                                    src="https://i.imgur.com/zryxaH8.jpg"
                                    alt="Product-Image"
                                    className="w-full"
                                />
                            </div>
                            {/* Product Details */}
                            <div className="flex flex-col justify-between">
                                <div>
                                    {/* Product Title */}
                                    <h1 className="text-3xl text-red-500 font-semibold sm:text-4xl">
                                        Burger
                                    </h1>
                                    {/* Product Description */}
                                    <p className="mt-3 text-gray-600 text-md leading-6 text-justify sm:text-left sm:mt-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Sed enim ut sem viverra aliquet eget sit. Odio
                                        facilisis mauris sit amet
                                    </p>

                                    {/* Product Price */}
                                    <span className="text-xl text-red-500 font-semibold sm:text-2xl">
                                        $20
                                    </span>



                                    {/* Quantity Input and Order Button */}
                                    <div className=" ">
                                        <div className="text-left flex flex-col gap-2 w-full">
                                            {/* Quantity Label */}
                                            <label className="font-semibold">Cantidad</label>
                                            {/* Quantity Input */}
                                            <input
                                                className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500"
                                                type="number"
                                                defaultValue="1"
                                                required

                                            />
                                            <span>Cantidad Disponible: XX</span>

                                        </div>
                                    </div>



                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ItemDetail;

/* https://medium.com/@ryaddev/how-to-create-product-details-component-with-react-and-tailwindcss-96fc4c45230e */