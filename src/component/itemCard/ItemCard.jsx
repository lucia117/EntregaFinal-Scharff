import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const ItemCard = ({ imageUrl, title, price }) => {
    return (
        <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md ">
            {/* Imagen del Producto */}
            <a className="relative mx-3 mt-1 flex h-60  rounded-xl " href="#">
                <img className="object-scale-down" src={imageUrl} alt={title} />
                {/* <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span> */}
            </a>

            <div className=" m-3 flex items-center justify-between text-center">
                <a href="#">
                    {/* Título del Producto */}
                    <h5 className=" tracking-tight text-slate-900 ">{title}</h5>

                    {/* Precio del Producto */}
                    <span className="text-black font-semibold sm:text-xl">${price}</span>
                </a>

            </div>
        </div>
    );
};

export default ItemCard;