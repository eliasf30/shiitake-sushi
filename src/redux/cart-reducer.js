import { ADD_PRODUCT, DELETE_CART, REMOVE_PRODUCT} from './cart-actions';
import { addItemCart, removeitem } from './cart-utils';


const INITIAL_STATE = {
  items: [],
  totalcost:0

};

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_PRODUCT:
      const newAddedProducts = addItemCart(state.items, payload);
      const newtotal = newAddedProducts.reduce(
        (sub, item) => (sub += item.price * item.quantity),
        0
      );

      
      
      
      return {
        ...state,
        items: addItemCart(state.items, payload),
        totalcost: newtotal
        
      };
      case DELETE_CART:
      return {
        ...state,
        items: [],
        totalcost: 0
      };
      case REMOVE_PRODUCT:
          const removeProduct = removeitem(state.items, payload)
          const newtotal2 = removeProduct.reduce(
            (sub, item) => (sub += item.price * item.quantity),
            0
          );
        return{
          ...state,
        items: removeProduct,
        totalcost:newtotal2
        }
    default:
      return state;
  }
};
