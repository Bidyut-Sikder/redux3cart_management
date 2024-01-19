import React from 'react';
import BillDetails from './BillDetails';
import SingleCartProduct from './SingleCartProduct';
import { useSelector } from 'react-redux';


const CartProductList = () => {
    const poducts = useSelector(state => state.products)
    const cartsID = useSelector(state => state.carts['cartsID'])

    const totalProducts = cartsID.filter((value, index) => cartsID.indexOf(value) === index)
 
  
    const count = {};

    cartsID.forEach(element => {
      count[element] = (count[element] || 0) + 1;
    });
    


    return (
        <>
            {
                poducts

                    .filter(product => {
                        if (totalProducts.includes(product.id)) {
                            return product
                        }
                        else return false

                    })



 
                    .map(product => {
                        return <SingleCartProduct product={product} count={count} key={product.id} />

                    })
            }
        </>




    );
};

export default CartProductList;