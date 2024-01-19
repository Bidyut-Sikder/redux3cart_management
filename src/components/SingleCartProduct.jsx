import React from 'react';
import { useDispatch } from 'react-redux';
import { decreaseProduct, deleteProduct, increaseProduct } from '../redux/carts/acions';
import { addToCart } from '../redux/products/actions';

const SingleCartProduct = ({ product, count }) => {
  const dispatch = useDispatch()

  const { id, productName, categoryName, imgURL, price } = product;

  return (
    <div className="space-y-6 mt-1">

      <div className="cartCard">
        <div className="flex items-center col-span-6 space-x-6">

          <img className="lws-cartImage" src={imgURL} alt="product" />

          <div className="space-y-2">
            <h4 className="lws-cartName">{productName}</h4>
            <p className="lws-cartCategory">{categoryName}</p>
            <p>BDT <span className="lws-cartPrice">{price}</span></p>
          </div>
        </div>
        <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">

          <div className="flex items-center space-x-4">
            <button onClick={() => dispatch(addToCart(id, parseInt(price)))} className="lws-incrementQuantity">
              <i className="text-lg fa-solid fa-plus"></i>
            </button>
            <span className="lws-cartQuantity">{count[id]}</span>
            <button onClick={() => dispatch(decreaseProduct(id, parseInt(price)))} className="lws-decrementQuantity">
              <i className="text-lg fa-solid fa-minus"></i>
            </button>
          </div>

          <p className="text-lg font-bold">BDT <span className="lws-calculatedPrice">{parseInt(count[id]) * price}</span></p>
        </div>

        <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
          <button onClick={() => dispatch(deleteProduct(id))} className="lws-removeFromCart">
            <i className="text-lg text-red-400 fa-solid fa-trash"></i>
          </button>
        </div>
      </div>


    </div>
  );
};

export default SingleCartProduct;













