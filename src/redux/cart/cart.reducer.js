import { CartActionTypes } from "./cart.types";
import { addItemToCart, removeItemFromCart} from './cart.utils'

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
} 



const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        //note that the payload is optional that is y we did not use it here cuz it is not necessary in updating state
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            //return new obj so that prev state wont b same as this new state so our components can re-render 
            //after geting the new state from dedux store
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        default:
            return state;
    }
}




export default CartReducer;