import { createSelector } from 'reselect';




//this is an input selector 
const selectCart = state => state.cart;


//this is an output selector, it takes input selector and a function that receives that
//input slector as seen in an array as its arg and returns a part of the state needed
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);


export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)


export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0
        )
)


export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price, 0
        )
)