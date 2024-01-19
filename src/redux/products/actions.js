import { ADDPRODUCT, ADDTOCART } from "./actionTypes"

export const addproduct = (data) => {
    return {
        type: ADDPRODUCT,
        payload: data
    }

}

export const addToCart = (id, totalPrice) => {
  
    return {
        type: ADDTOCART,
        payload: {
            id,
            totalPrice
        }

    }

}















































































