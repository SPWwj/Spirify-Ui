import React, { useState, useEffect } from "react";
import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "components/CheckoutForm";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const key = process.env.REACT_APP_STRIPE_PUBLIC_KEY as string;
const stripePromise = loadStripe(key);

export default function Order() {
	const [clientSecret, setClientSecret] = useState("");

	useEffect(() => {
		// Create PaymentIntent as soon as the page loads
		fetch(
			"https://spirify.azurewebsites.net/api/Payment/create-payment-intent",
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
			}
		)
			.then((res) => res.json())
			.then((data) => setClientSecret(data.clientSecret));
	}, []);

	const appearance = {
		theme: "stripe",
	};
	const options = {
		clientSecret,
		appearance,
	} as StripeElementsOptions;

	return (
		<div className="Order">
			{clientSecret && (
				<Elements options={options} stripe={stripePromise}>
					<CheckoutForm clientSecret={clientSecret} />
				</Elements>
			)}
		</div>
	);
}
