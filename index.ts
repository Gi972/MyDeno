import { serve } from "https://deno.land/std@0.158.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@9.12.0?target=deno&no-check";

console.log("Hello deno-stripe!");
const STRIPE_SK = Deno.env.get("STRIPE_SK");

const stripe = new Stripe(STRIPE_SK, {
  apiVersion: "2020-08-27",
  httpClient: Stripe.createFetchHttpClient(),
});

console.log("stripe", stripe);

serve((_req) => {
  return new Response("Hello World!", {
    headers: { "content-type": "text/plain" },
  });
});
