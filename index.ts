import { serve } from "https://deno.land/std@0.158.0/http/server.ts";

serve((_req) => {
  return new Response("Hello World!", {
    headers: { "content-type": "text/plain" },
  });
});
