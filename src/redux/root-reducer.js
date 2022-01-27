//THIS ROOT REDUCER IS THE ACTUAL BASE REDUCER OBJECT THAT REPS ALL OF THE STATE OF OUR APPLICATION
//THE ACTUAL CODE THAT COMBINES ALL OF OUR STATES TOGETHER
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import shopReducer from "./shop/shop.reducer";

//what we will get here is the actual local storage
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import CartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";

const persistconfig = {
    key: 'root',
    //storage key goes to the value of storage redux persist we trying to use
    storage,
    //user is being handled by firebase authentication
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: CartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistconfig, rootReducer);

// export default combineReducers({
//     user: userReducer,
//     cart: CartReducer
// });


