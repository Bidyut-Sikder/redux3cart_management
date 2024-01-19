import { ADDITION, DECREASEQTY, DELETEPRODUCT, INCREASEQTY } from "./actionTypes"













export const increaseProduct = (id) => {

    return {
        type: INCREASEQTY,
        payload: id
    }
}

export const decreaseProduct = (id, price) => {

    return {
        type: DECREASEQTY,
        payload: {
            id, price
        }
    }
}



export const deleteProduct = (id) => {

    return {
        type: DELETEPRODUCT,
        payload: id
    }
}


































