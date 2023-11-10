// selectors/cart.selector.js

import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItem = createSelector(
  [selectCart],
  (cart) => Object.values(cart.cartItems)
);

export const selectCartItemsCount = createSelector(
  [selectCartItem],
  (cartItems) =>
    cartItems.reduce(
      (totalItems, cartItem) => totalItems + (cartItem.quantity || 0),
      0
    )
);

export const selectTotalItems = createSelector(
  [selectCartItem],
  (cartItems) => {
    const total = cartItems.reduce(
      (totalItems, cartItem) => {
        const itemPrice = parseFloat(
          cartItem.price.replace(/[^\d.]/g, '').replace('.', '') // Remove non-numeric characters and the dot separator
        );
        return totalItems + (cartItem.quantity || 0) * itemPrice;
      },
      0
    );

    // Format the total as a string with three decimal places
    const formattedTotal = total.toFixed(3);

    return parseFloat(formattedTotal); // Convert the string back to a float
  }
);
