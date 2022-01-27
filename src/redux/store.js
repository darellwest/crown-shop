//middlewares catches the action, console logs it out for us. it is nice for debugging our redux code
//it does something with the action and then pass them into the root reducer. it is gotten from the fuction logger
import { createStore, applyMiddleware } from 'redux';
//persistore from redux-persis allows our browser to cache our store depending on certain configuration 
// we are going to set
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
//persistent version of our store
export const persistor =  persistStore(store)


// export default {store, persistor};

//export deftault store;