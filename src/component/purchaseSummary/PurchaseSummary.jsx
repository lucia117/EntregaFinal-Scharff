const PurchaseSummary = ({ imageUrl, title, price }) => {
    return (
        <>
            <div class="flex justify-between text-left ">

                <div className=" w-full max-w-3xl rounded-lg border border-gray-100 bg-white shadow-md ">
                    <div class="mt-3 ">
                        <p className="font-semibold text-center">Resumen de compra</p>
                    </div>
                    <hr />
                    <div class="grid grid-cols-2 mr-7 ml-7">
                        <div className="text-left">Productos</div>
                        <div className="text-right">$1234</div>
                        <div className="text-left">Envio</div>
                        <div className="text-right">$1234</div>
                        <div className="text-left font-semibold">Total</div>
                        <div className="text-right mt-1">$1234</div>
                    </div>
                    <div className="text-center m-5">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                            Finalizar Compra
                        </button>
                    </div>



                </div>
            </div>




        </>
    )
}
export default PurchaseSummary