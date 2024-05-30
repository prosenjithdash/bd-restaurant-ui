import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useCart from "../../../Hooks.jsx/useCart";
import useAxiosSecure from "../../../Hooks.jsx/useAxiosSecure";
import useAuth from "../../../Hooks.jsx/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckOutForm = () => {
    const [errorM, setErrorM] = useState('')
    const [clientSecret, setClientSecret] = useState((''))
    const [transactionId, setTransactionId] = useState();
    const stripe = useStripe();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const elements = useElements();  
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const navigate = useNavigate();

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then((res) => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
    }
           
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

                // now save the payment in the database
                const payment  = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(), // utc date convert. use moment js to
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status: 'pending'
                }
                const res = await axiosSecure.post('/payment', payment)
                console.log('Payment saved', res.data);
                refetch();
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Thanks for payment",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/dashboard/paymentHistory')

                }
                
            }
        }
    }
    return (
        <form onSubmit={handleSubmit} className="mx-[200px] bg-gray-100 p-20 rounded-lg my-[100px]">
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