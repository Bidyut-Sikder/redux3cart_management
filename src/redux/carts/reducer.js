import { ADDTOCART } from "../products/actionTypes";
import { addToCart } from "../products/actions";
import { ADDITION, DECREASEQTY, DELETEPRODUCT, INCREASEQTY } from "./actionTypes";




const initialState = {
    prices: [],
    cartsID: []
}




const reducer = (state = initialState, action) => {

    switch (action.type) {


        case DECREASEQTY:
            function removeElementFromArray(arr, elementToRemove) {
                const indexToRemove = arr.indexOf(elementToRemove);

                if (indexToRemove !== -1) {

                    arr.splice(indexToRemove, 1);
                }

                return arr;
            }



            return {
                ...state,
                prices: removeElementFromArray(state.prices, action.payload.price),
                cartsID: removeElementFromArray(state.cartsID, action.payload.id)
            };



        case ADDTOCART:

            return {
                ...state,
                cartsID: [
                    ...state.cartsID,
                    action.payload.id
                ],
                prices: [
                    ...state.prices,
                    action.payload.totalPrice
                ]
            }


        case DELETEPRODUCT:

            return {
                ...state,
                cartsID: state.cartsID.filter(item => item !== action.payload)
            }

        default:
            return state;
    }

}







export default reducer;















































