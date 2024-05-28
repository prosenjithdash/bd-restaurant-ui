import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

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
        } else {
            console.log('Payment Method', paymentMethod);
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
            <button className="bg-yellow-500 text-black p-2 rounded-md mt-4" type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};

export default  CheckOutForm;