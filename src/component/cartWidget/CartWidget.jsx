import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    // Número hardcodeado para la notificación
    const notificationNumber = 5;

    return (
        <div className="relative">
            <FontAwesomeIcon icon={faShoppingCart} className="text-2xl text-white cursor-pointer" />
            {notificationNumber > 0 && (
                <div className="absolute top-3 right-0 left-3 bg-red-500 text-white rounded-full p-0.5 px-1 text-xs">
                    {notificationNumber}
                </div>
            )}
        </div>
    );
};

export default CartWidget;