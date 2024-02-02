import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CartWidget from "../cartWidget/CartWidget"
import { faHeart, faUser } from "@fortawesome/free-solid-svg-icons"
import { NavLink } from "react-router-dom";


const links = [
    {
        label: "Inicio",
        href: "/",
    },
    {
        label: "Mujer",
        href: "/productos/mujer",
    },
    {
        label: "Hombre",
        href: "/productos/hombre",
    },
    {
        label: "Unisex",
        href: "/productos/unisex",
    },
    {
        label: "Accesorios",
        href: "/productos/accesorios",
    }
];


function Navbar() {
    return (
        <header  >
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-white text-2xl font-bold">
                        <span>Logo</span>
                    </div>

                    {/* Enlaces */}
                    <div className="space-x-4">
                        {links.map((link) => (
                            <NavLink
                                key={link.href}
                                to={link.href}
                                className={({ isActive }) => (
                                    `  font-semibold ${isActive ? "text-blue-400" : "text-white"}`
                                )}
                            >
                                {link.label}
                            </NavLink>
                        ))}
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
        </header >
    )

}

export default Navbar