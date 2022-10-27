export const addItemCart = (cart, product) => {
  const exists = cart.find(item => item.id === product.id);

  if (exists) {
    return cart.map(item =>
      item.id === exists.id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );
  }

  return [...cart, { ...product, quantity: 1 }];
};

export const removeitem = (cart, id) => {
  const exist = cart.find(item => item.id === id)

  if (exist && exist.quantity > 1){
    return cart.map (item => item.id === exist.id  ? {
      ...item,
      quantity: item.quantity - 1,
    }
  : item)
  }
  else   return cart.filter(item => id !== item.id);
}
