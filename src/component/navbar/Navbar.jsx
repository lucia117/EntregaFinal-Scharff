import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CartWidget from "../cartWidget/CartWidget"
import { faHeart, faUser } from "@fortawesome/free-solid-svg-icons"

function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-white text-2xl font-bold">
                    <span>Logo</span>
                </div>

                {/* Enlaces */}
                <div className="space-x-4">
                    <a href="#" className="text-white">Categorias</a>
                    <a href="#" className="text-white">Ofertas</a>
                    <a href="#" className="text-white">Contacto</a>
                </div>

                {/* Carrito, Perfil y Favoritos */}
                <div className="flex items-center space-x-4">
                    <CartWidget />
                    <a href="#" className="text-white">
                        <FontAwesomeIcon icon={faHeart} className="text-2xl text-white cursor-pointer" />
                    </a>
                    <a href="#" className="text-white">
                        <FontAwesomeIcon icon={faUser} className="text-2xl text-white cursor-pointer" />
                    </a>

                </div>
            </div>
        </nav>
    )

}

export default Navbar