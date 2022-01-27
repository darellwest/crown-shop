import React from "react";
import { connect } from "react-redux";
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import './cart-dropdown.styles.scss';


//0h wow so onClick synthetic event method works for both react custom components too e.g customButton below
const CartDropdown = ({cartItems, dispatch}) => {
    //do this in distructuring above ...otherprops
    // console.log(otherprops);
    let navigate = useNavigate();
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ? 
                        cartItems.map(cartItem => <CartItem key={cartItem.id } item={cartItem}/>)
                    : <span className="empty-message">Your Cart is Empty</span>
                }
            </div>
            <CustomButton onClick={() =>{ 
                    navigate('/checkout');
                    dispatch(toggleCartHidden());
                }
            }>GO TO CHECKOUT</CustomButton>
        </div>
    )
};

//selectCartItems(state) makes sure cartDropdown doesn't re-render when state changes not 
//related to it occurs. this have been achieved using redux memorize redux selector library
// const mapStateToProps = state => ({
//     cartItems: selectCartItems(state)
// })

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

//connect passes dispatch into our component as a prop if we don't supply second arg to connect()
//this is if it is onlu mapstatetoprops we have there
//so no need to write to write map dispatch to props since is just once we want to do that
//we should just distructure dispatch in the component cartDropDown above

export default connect(mapStateToProps)(CartDropdown);