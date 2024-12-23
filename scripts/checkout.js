import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "../styles/pages/checkout/checkoutHeader.js";

renderCheckoutHeader();
renderOrderSummary();
renderPaymentSummary()