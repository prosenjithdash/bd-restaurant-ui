import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./ CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
    return (
        <div>
            <SectionTitle subHeading={'Please Pay For Food'} heading={'Payment'} />
            
            <div>
                <Elements stripe={stripePromise} >
                    <CheckOutForm />
                </Elements>

            </div>
        </div>
    );
};

export default Payment;