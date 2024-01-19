import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/products/actions';

const Product = ({ product }) => {
    const dispatch = useDispatch()
    // console.log(product)
    const { id, imgURL, categoryName, productName, qty, price } = product

    const onclickHandler = (id,totalPrice) => {
        dispatch(addToCart(id,totalPrice))

    }

    return (
        <div className="lws-productCard">
            <img className="lws-productImage" src={imgURL} alt="product" />
            <div className="p-4 space-y-2">
                <h4 className="lws-productName">{productName}</h4>
                <p className="lws-productCategory">{categoryName}</p>
                <div className="flex items-center justify-between pb-2">
                    <p className="productPrice">BDT <span className="lws-price">{price}</span></p>
                    <p className="productQuantity">QTY <span className="lws-quantity">{qty}</span></p>
                </div>
                <button onClick={() => onclickHandler(id, parseInt(price))} className="lws-btnAddToCart">Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;