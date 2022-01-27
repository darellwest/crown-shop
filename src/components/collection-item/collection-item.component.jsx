import React from "react";
import { connect } from 'react-redux';
import './collection-item.styles.scss';
import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";




//so we can distructure the addItem from the this.props provided through mapdispatchtoprop
const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    return(
    <div className="collection-item">
        <div className="image" style={{backgroundImage: `url(${imageUrl})`}} />
        <div className="collection-footer">
            <span className="name">{ name }</span>
            <span className="price">{ price }</span>
        </div>
        {/*this is where addItem(item) in the onclick below is where dispatch to prop returned object key with a value fuction
        addItem: item => dispatch(addItem(item) is called with a valid value of item gotten from props this component
        is called with which now reps the payload in action i.e payload: item */}
        <CustomButton onClick={() => addItem(item)} inverted>Add to cart</CustomButton>
    </div>
)};

//mapDistpatch to prop is a function that gets a redux dispatch function as arg when called
//the addItem: function will receive the item as property or parameter and pass it into our addItem action creator
//and the additem: function will go into our collection item component above, so whenever we call the 
// addItem: function, the function will receive item as the as the property pass it into our addItem(item) action 
//creator which gives us back that addItem object where the type is equal to ADD_ITEM and payload is equal to item that
//got passed in and then we will dispatch that new onject into our store
//note that the value returned by mapDispatchToProps which is an object is passed into our CollectionItem component as prop which
//can be accessed using this.props.addItem

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

//we are not mapping state to props or trying to update the new state on the component so first arg is null
export default connect(null, mapDispatchToProps)(CollectionItem);

//function mapdispatch to props above is equiv to below
// function dispatch(x, y){
//     return {
//       name: x,
//       surname: y
//     }
//   }
  
//   function work(callback){
//     return{
//       itemName: callback("ewere", "Njoagwu")
//     }
//   }
  


