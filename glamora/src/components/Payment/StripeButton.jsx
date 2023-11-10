import React from 'react';
import ReactCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const stripePrice = price * 100000;
  const publishableKey = process.env.REACT_APP_STRIPE_KEY;

  if (!publishableKey) {
    console.error('Stripe publishable key is not defined.');
    return null; 
  }

  const onToken = (token) => {
    console.log(token);
    alert('Payment successful!');
  };

  return (
    <>
      <ReactCheckout
        label="Proceed to Payment"
        name="GLAMORA"
        billingAddress
        shippingAddress
        description={`Your total price is Rp.(price)`}
        amount={stripePrice}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
    </>
  );
};

export default StripeButton;
