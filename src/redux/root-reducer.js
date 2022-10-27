import { combineReducers } from 'redux';

import { cartReducer } from './cart-reducer';
import { userReducer } from './user/user-reducer';




 export const rootReducer = combineReducers({
  cart: cartReducer,
  
});

