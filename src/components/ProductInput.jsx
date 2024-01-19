import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addproduct } from '../redux/products/actions';

const ProductInput = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        productName: "",
        categoryName: "",
        imgURL: "",
        price: "",
        qty: ""
    })

    const onchangeHandler = (key, value) => {
        setInput((previous => ({
            ...previous,
            [key]: value
        })))
    }
    const onsubmitHandler = (e) => {
        e.preventDefault()

        dispatch(addproduct(input))

    }

    return (
        <div>

            <div className="formContainer">
                <h4 className="formTitle">Add New Product</h4>
                <form onSubmit={onsubmitHandler} className="space-y-4 text-[#534F4F]" id="lws-addProductForm">

                    <div className="space-y-2">
                        <label htmlFor="lws-inputName">Product Name</label>
                        <input onChange={(e) => onchangeHandler('productName', e.target.value)} className="addProductInput" id="lws-inputName" type="text" required />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="lws-inputCategory">Category</label>
                        <input onChange={(e) => onchangeHandler('categoryName', e.target.value)} className="addProductInput" id="lws-inputCategory" type="text" required />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="lws-inputImage">Image Url</label>
                        <input onChange={(e) => onchangeHandler('imgURL', e.target.value)} className="addProductInput" id="lws-inputImage" type="text" required />
                    </div>

                    <div className="grid grid-cols-2 gap-8 pb-4">

                        <div className="space-y-2">
                            <label htmlFor="ws-inputPrice">Price</label>
                            <input onChange={(e) => onchangeHandler('price', e.target.value)} className="addProductInput" type="number" id="lws-inputPrice" required />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="lws-inputQuantity">Quantity</label>
                            <input onChange={(e) => onchangeHandler('qty', e.target.value)} className="addProductInput" type="number" id="lws-inputQuantity" required />
                        </div>
                    </div>

                    <button onClick={onsubmitHandler} type="submit" id="lws-inputSubmit" className="submit">Add Product</button>
                </form>
            </div>
        </div>
    );
};

export default ProductInput;