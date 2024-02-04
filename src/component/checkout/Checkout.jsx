import { Link } from "react-router-dom";
const Checkout = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-full max-w-md container mx-auto">
                <div className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 text-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-12 w-12 mx-auto text-green-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <div className="text-3xl font-semibold text-gray-800 my-3">
                        ¡Gracias por su compra!
                    </div>
                    <p className="text-gray-600 mb-6">
                        Su pedido ha sido procesado con éxito.
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        <Link to={"/"}>Volver al Inicio</Link>
                    </button>
                </div>
            </div>
        </div>




    )
}

export default Checkout;

