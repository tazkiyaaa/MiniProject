// CheckOutItem.jsx

import React from 'react';
import { connect } from 'react-redux';
import { clearItem, addItem, removeItem } from '../../../redux/actions/cart.action';
import './checkoutitem.css';

import { MdClear } from 'react-icons/md';

const CheckOutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageURL, price, quantity } = cartItem;

  // Ensure that quantity and price are valid numbers
  const validQuantity = Number(quantity);

  // Parse the price string into a numeric value
  const validPrice = Number(price.replace(/[^\d]/g, ''));

  // Menghitung total harga untuk item saat ini
  const totalItemPrice = validQuantity * validPrice;

  return (
    <div className="checkout_items">
      <div>
        <img className="img_container" src={imageURL} alt="product" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity center-aligned">
        <div className="decrease" onClick={() => removeItem(cartItem)}>
          {' '}
          -{' '}
        </div>
        <span className="value">{validQuantity}</span>
        <div className="increase" onClick={() => addItem(cartItem)}>
          {' '}
          +{' '}
        </div>
      </span>

      {/* Menampilkan total harga untuk item saat ini */}
      <span className="price">Rp.{totalItemPrice}</span>

      <div className="remove_btn center-aligned" onClick={() => clearItem(cartItem)}>
        <MdClear />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
