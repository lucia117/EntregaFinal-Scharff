import React from 'react';
import { Link } from "react-router-dom";

const ItemCard = ({ producto }) => {

    //const id = producto.id
    const { id, nombre, precio, imgUrl } = producto
    // Constantes para rutas y clases
    const itemDetailLink = `/item/${id}`;
    const discountBadgeClass = "absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white";

    return (
        <Link to={itemDetailLink} className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            {/* Imagen del Producto */}
            <div className="relative mx-3 mt-1 flex h-60 rounded-xl ">
                <img className="object-scale-down" src={imgUrl} alt="" />
                {/* Descuento
                <span className={discountBadgeClass}>39% OFF</span> */}
            </div>

            {/* Detalles del Producto */}
            <div className="m-3 items-center justify-between text-center">
                {/* Título del Producto */}
                <a href="#">
                    <h5 className="tracking-tight text-slate-900"> {nombre}</h5>
                </a>

                {/* Precio del Producto */}
                <span className="text-black font-semibold sm:text-xl">${precio}</span>
            </div>
        </Link>
    );
};

export default ItemCard;
