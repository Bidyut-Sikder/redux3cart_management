import React from 'react';
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';


const ProductList = () => {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()
    // console.log(products)
    return (

        <div className="productContainer" id="lws-productContainer">
            {
                products.map(product => {
                    return <Product key={product.id} product={product} />
                })
            }


        </div>

    );
};

export default ProductList;