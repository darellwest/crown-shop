import React from "react";
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss';

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";



const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
         <ShoppingIcon className='shoppin-icon' />
         <span className="item-count">{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

//everytime the state updates map state to props is called every single time
//even when user action is caried out this makes cartItem.reduce to be called everytime
//re-render occurs on item count, and reduce funtion runs again and component re-renders
//this is a performance issue, we'll correnct this with a library called reselect
//i.e memorize selector
//so we'd be moving our mapstatetoprop returned codes to the folder it is related to for reusability
//which is selectCartItemsCount. so now instead of destructuring {cart: {cartItems}} we will just pass in the full state below
// const mapStateToProps = state => ({
//     itemCount: selectCartItemsCount(state)
// }
// )
const mapStateToProps = createStructuredSelector({
        itemCount: selectCartItemsCount
    }
)


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);