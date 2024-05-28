import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useCart from "../../../Hooks.jsx/useCart";
import useAxiosSecure from "../../../Hooks.jsx/useAxiosSecure";
import useAuth from "../../../Hooks.jsx/useAuth";

const CheckOutForm = () => {
    const [errorM, setErrorM] = useState('')
    const [clientSecret, setClientSecret] = useState((''))
    const [transactionId, setTransactionId] = useState();
    const stripe = useStripe();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const elements = useElements();  
    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    useEffect(() => {
     axiosSecure.post('/create-payment-intent', {price: totalPrice})
            .then((res) => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret);
            })
           
    }, [axiosSecure,totalPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log(' Payment error', error);
            setErrorM(error.message)

        } else {
            console.log('Payment Method', paymentMethod);
            setErrorM('');
        }

        // confirm payment
        const { paymentIntent,error:confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name:user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('Confirm Error')
        } 
        else {
            console.log('paymentIntent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id ', paymentIntent.id)
                setTransactionId(paymentIntent.id)
            }
        }
    }
    return (
        <form onSubmit={handleSubmit} className="m-10">
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className=" btn btn-primary p-2  mt-4" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-600">{errorM}</p>
            {transactionId && <p className="text-green-600">Your transaction id : {transactionId}</p>}
        </form>
    );
};

export default  CheckOutForm;