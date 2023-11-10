import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItem, selectTotalItems } from '../../../redux/selectors/cart.selector'

import CheckOutItem from '../CheckOutItem/CheckOutItem'
import StripeButton from '../../../components/Payment/StripeButton'

import './checkoutpage.css'

const CheckoutPage = ({cartItems, total}) => {
    return (
      <>
      <section className="checkout">
      <div className="checkout_header">
        <div className="sections">
          <span>PRODUCT</span>
        </div>
        <div className="sections">
          <span></span>
        </div>
        <div className="sections">
          <span>QUANTITY</span>
        </div>
        <div className="sections">
          <span>PRICE</span>
        </div>
        <div className="sections">
          <span>REMOVE</span>
        </div>
      </div>
      {
        cartItems.map(cartItem => (
          <CheckOutItem 
          key={cartItem.id}
          cartItem={cartItem}
          />
        ))
      } 
  </section> 
      <div className="total">
        <span>TOTAL: Rp.{total}</span>
        <StripeButton price={total} />
      </div>
      </>
    )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItem,
  total: selectTotalItems
})
console.log(mapStateToProps); 

export default connect(mapStateToProps)(CheckoutPage)
