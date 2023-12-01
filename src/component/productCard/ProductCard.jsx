import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const ProductCard = ({ imageUrl, title, subtitle, description, price }) => {
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md m-4">
            {/* Imagen del Producto */}
            <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />

            <div className="p-4">
                {/* Título del Producto */}
                <h2 className="text-xl font-semibold text-gray-800">{title}</h2>

                {/* Subtítulo del Producto */}
                <p className="text-gray-700 text-base mb-2">{subtitle}</p>

                {/* Precio del Producto */}
                <p className="text-gray-900 font-bold text-xl mt-2">${price}</p>

                {/* Botones de Compra y Favoritos */}
                <div className="mt-4 flex justify-center items-center">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                        Comprar
                    </button>

                    <button className="bg-white hover:text-fuchsia-800 text-fuchsia-500 font-bold py-2 px-4 rounded-full" >
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
