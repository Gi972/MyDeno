import { serve } from "https://deno.land/std@0.158.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@9.12.0?target=deno&no-check";

console.log("Hello deno-stripe!");
const STRIPE_SK = Deno.env.get("STRIPE_SK");
const DOMAIN_FRONT = Deno.env.get("DOMAIN_FRONT");

const stripe = new Stripe(STRIPE_SK, {
  apiVersion: "2020-08-27",
  httpClient: Stripe.createFetchHttpClient(),
});

serve(async (_req) => {
  console.log("stripe", stripe.VERSION);

  const account = await stripe.accounts.create({
    email: "ji@test.com",
    type: "express",
    country: "FR",
    capabilities: {
      card_payments: { requested: true },
      transfers: { requested: true },
    },
  });

  const accountLink = await stripe.accountLinks.create({
    account: account.id,
    refresh_url: `http://${DOMAIN_FRONT}`,
    return_url: `http://${DOMAIN_FRONT}`,
    type: "account_onboarding",
  });

  try {
    return new Response(JSON.stringify({ message: "ok", accountLink }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log("error", error.message);
    return new Response(JSON.stringify(error.message), {
      headers: { "Content-Type": "application/json" },
      status: 404,
    });
  }
});
