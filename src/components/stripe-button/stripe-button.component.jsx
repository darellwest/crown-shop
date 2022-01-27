import React from "react";
import StripeCheckout from "react-stripe-checkout";



const StripeCheckoutButton = ({ price }) => {
    //stripe acc details allgnets@gmail.com 
    const priceForStripe = price * 100;
    const publishableKey='pk_test_51KM95lL1Z0IE5I5jepZCvIBiNRR4JdH48Wjz1mIxhhAnTOLp96E9FsNwGWhF5lWBczpWE7SJMYX9fTkykaXypLCk00AaLJrSCd'

    const onToken = token => {
        console.log(token);
        alert("Payment Successful")
    }

    return(
        <StripeCheckout 
            label="Pay Now"
            name="Crown Shop Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total price is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            //token is the onSuccess callback
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}


export default StripeCheckoutButton;