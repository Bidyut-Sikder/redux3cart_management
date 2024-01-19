import { DECREASEQTY } from "../carts/actionTypes";
import { ADDPRODUCT, ADDTOCART } from "./actionTypes";




const initialState = [
    {
        id: 0,
        productName: 'pussy',
        categoryName: 'bautiful',
        imgURL: 'http://surl.li/pllco',
        price: '50',
        qty: '6',


    },
    {
        id: 1,
        productName: 'fdf',
        categoryName: 'no catefdfagory',
        imgURL: 'http://surl.li/plldn',
        price: '15',
        qty: '3',


    },

]




const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDPRODUCT:
            const { productName, categoryName, imgURL, price, qty } = action.payload
            return [
                ...state,
                {
                    id: state.length + 1,
                    productName,
                    categoryName,
                    imgURL,
                    price,
                    qty,

                }
            ]
        case ADDTOCART:


            return state.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        qty: parseInt(item.qty) === 0 ? '0' : String(parseInt(item.qty) - 1),

                    }
                } else return item
            })

        case DECREASEQTY:

            console.log(action.payload)
            return state.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        qty: String(parseInt(item.qty) + 1)
                    }
                } else return item
            })

        default:
            return state;
    }
}









export default reducer






































