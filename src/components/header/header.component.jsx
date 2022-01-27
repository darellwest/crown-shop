import React from 'react';
import {Link} from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon.component';
//connect is a higer order component that lets us modify our component to have access to redux
//higher order components are funtions that take components as argument and returns a new sooped up component
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors' 
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { auth } from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';




const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to="/shop">SHOP</Link>
            <Link className='option' to="/shop">CONTACT</Link>
            {
                currentUser ?
                <div className='option' onClick={ () => auth.signOut() }>SIGN OUT</div>
                : 
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {hidden? null : <CartDropdown />}
    </div>
);

//createStructuredSelector helps us pass the top level state into the seleCurrentUser and selectCartHidden
//automatically
//you know nomarlly mapstateto props accepts the state obj from root reducer before we started using selector memorize
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  });

export default connect(mapStateToProps)(Header);