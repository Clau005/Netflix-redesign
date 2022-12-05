import { createCheckoutSession , getStripePayments } from "@stripe/firestore-stripe-payments";
import { getFunctions, httpsCallable } from "@firebase/functions"
import app from "../firebase"
// import { Snapshot } from "recoil";

const payments = getStripePayments(app, {
    customersCollection: "customers",
    productsCollection: "products",

})

const loadCheckOut = async (priceId: string) => {
    await createCheckoutSession(payments, {
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,    
    })
    .then((snapshot) => window.location.assign(snapshot.url))
    .catch((error) => console.log(error.message))
}


export { loadCheckOut }
export default payments