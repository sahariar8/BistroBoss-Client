import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { set } from 'react-hook-form';

const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [error,setError] = useState('');

    //

    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
        return;
        }
        
        const {error,paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card,
        });
        if(error){
            console.log('payment error', error);
            setError(error.message)
        }else{
            console.log('Payment Method', paymentMethod);
            setError('')
        }
    }
    //

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button className='btn btn-sm btn-info my-2' type="submit" disabled={!stripe}>
            Pay
          </button>
          <>
          <p className='text-red-600 font-semibold'>{error}</p>
          </>
        </form>
      </div>
    );
};

export default CheckoutForm;