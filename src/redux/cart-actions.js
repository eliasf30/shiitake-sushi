
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_CART ="DELETE_CART"
export const REMOVE_PRODUCT ="REMOVE_PRODUCT"


export const addProduct = product => ({
  type: ADD_PRODUCT,
  payload: product,
});


export const deleteCart = ({
  type: DELETE_CART
})

export const removeProduct = Id => ({
  type: REMOVE_PRODUCT,
  payload: Id,
});
