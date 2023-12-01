import React from 'react';
import ProductCard from '../productCard/ProductCard';

const ProductList = (products) => {
    const cards = []

    products.forEach(p => {
        const c = <ProductCard imageUrl={p.imageUrl} title={p.title} description={p.description} />
    })

    return (
        { cards }
    )
}

export default ProductList;
