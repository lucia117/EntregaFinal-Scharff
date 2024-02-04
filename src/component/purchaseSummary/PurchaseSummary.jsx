import { Link } from "react-router-dom"

const PurchaseSummary = ({ total }) => {
    const envio = 1000
    const precioFinal = total() + envio

    return (

        <div className=" w-full max-w-3xl rounded-lg border border-gray-100 bg-white shadow-md ">
            <div className="mt-3 m ">
                <p className="font-semibold text-center">Resumen de compra</p>
            </div>
            <hr />
            <div className="grid grid-cols-2 mr-7 ml-7">
                <div className="text-left">Productos</div>
                <div className="text-right">${total()}</div>
                <div className="text-left">Envio</div>
                <div className="text-right">${envio}</div>
                <div className="text-left font-semibold">Total</div>
                <div className="text-right mt-1">${precioFinal}</div>
            </div>
            <div className="text-center m-5">

                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                    <Link to="/checkout">Finalizar Compra</Link>
                </button>
            </div>



        </div>





    )
}
export default PurchaseSummary