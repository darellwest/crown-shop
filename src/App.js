import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { onAuthStateChanged } from "firebase/auth";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import ParentRoute from './components/parent-route/parentroute.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { onSnapshot } from 'firebase/firestore';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import CheckoutPage from './pages/checkout/checkout.component';
import CollectionPage from './pages/collection/collection.component';


//NOTE ANY COMPONENT RENDERED BY Route as in component={} GET PASSED THREE AUGuMENTS IN ITS PROPS
//SUCH AUGUMENTS ARE history, location and match and they are all objects, this is for reactrouterdom v5
//in react router dom v6 switch has been changed to Routes and Route must be rendered as a child of Routes
//component as an argument of Route has been changed to element its value which is a component
//should be written in jsx e.g element={<HomePage/>}, and also the use of exact as Route argument not in use again
//{//index means render homepage when root i.e / matches}



class App extends React.Component{
    // constructor(props){
    //   super(props);
    //   this.state = {
    //     currentUser: null
    //   }
    // }

    unsubscribeFromAuth = null

    componentDidMount(){
      const { setCurrentUser } = this.props;
      this.unsubscribeFromAuth = onAuthStateChanged(auth, async(userAuth) => {
        // console.log('auth is:', auth); NOTE my parameter userAuth === auth.currentUser
        // createUserProfileDocument(user);
        if(userAuth){
          const userRef = await createUserProfileDocument(userAuth);
          onSnapshot(userRef, snapshot => {
          //  console.log('this is the snapshot object: ', snapshot.data());
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            });
          });
        }else{
          setCurrentUser(userAuth);
        }

      });
    }

    componentWillUnmount(){
      //to avoid memory leak in our js app
      this.unsubscribeFromAuth();
    }

    render(){
      // console.log('what is set curr', setCurrentUser);
      return (
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<ParentRoute />}>
                <Route path='signin' element={this.props.currentUser? <Navigate to='/' />: <SignInSignUpPage />}/>
                <Route index element={<HomePage />} /> 
                <Route  path="shop" element={<ShopPage/>} />
                <Route  path="checkout" element={<CheckoutPage/>} />
                <Route  path="shop/:collectionId" element={<CollectionPage />} />
            </Route>
          </Routes>
        </div>
      ); 
    }
}
//state as seen in argument below is the object returned from user reducer. distructured from object returned
//from root reducer
//const mapstatetoprops = ({ user }) => ({
  
const mapstatetoprops = createStructuredSelector({
  // currentUser: user.currentUser
  currentUser: selectCurrentUser
});


const mapDispatchToProps = dispatch => ({
  //dispatch as seen below is way of redux saying whatever arg u passin me is going to be an action obj that i am
  //going to pass to every reducer then filter based on action type
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
//first argument of connect is mapstatetoprops and second is mapdispatch to prop 
export default connect(mapstatetoprops, mapDispatchToProps)(App);
