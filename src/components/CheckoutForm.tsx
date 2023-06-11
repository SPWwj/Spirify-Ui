import React, { useEffect, useState, FormEvent } from "react";
import {
	PaymentElement,
	LinkAuthenticationElement,
	useStripe,
	useElements,
} from "@stripe/react-stripe-js";
import { StripePaymentElementOptions } from "@stripe/stripe-js";

type StripeErrorType = {
	type?: string;
	message: string;
};

const CheckoutForm: React.FC<{ clientSecret: string }> = ({ clientSecret }) => {
	const stripe = useStripe();
	const elements = useElements();

	// const [email, setEmail] = useState<string>("");
	const [message, setMessage] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		if (!stripe) {
			return;
		}

		if (!clientSecret) {
			return;
		}

		stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
			if (!paymentIntent) {
				setMessage("Could not retrieve payment intent.");
				return;
			}

			switch (paymentIntent.status) {
				case "succeeded":
					setMessage("Payment succeeded!");
					break;
				case "processing":
					setMessage("Your payment is processing.");
					break;
				case "requires_payment_method":
					setMessage("Your payment was not successful, please try again.");
					break;
				default:
					setMessage("Something went wrong.");
					break;
			}
		});
	}, [stripe, clientSecret]);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		setIsLoading(true);

		const { error } = (await stripe.confirmPayment({
			elements,
			confirmParams: {
				return_url: "https://spirify.azurewebsites.net/",
			},
		})) as { error: StripeErrorType };

		if (
			error &&
			(error.type === "card_error" || error.type === "validation_error")
		) {
			setMessage(error.message);
		} else {
			setMessage("An unexpected error occurred.");
		}

		setIsLoading(false);
	};
	const paymentElementOptions = {
		layout: "tabs",
	} as StripePaymentElementOptions;

	return (
		<form id="payment-form" onSubmit={handleSubmit}>
			<LinkAuthenticationElement
				id="link-authentication-element"
				// onChange={(e) => setEmail(e.target.value)} <- Remove or update this line
			/>
			<PaymentElement id="payment-element" options={paymentElementOptions} />
			<button disabled={isLoading || !stripe || !elements} id="submit">
				<span id="button-text">
					{isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
				</span>
			</button>
			{message && <div id="payment-message">{message}</div>}
		</form>
	);
};

export default CheckoutForm;
