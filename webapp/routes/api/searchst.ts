import { HandlerContext } from "$fresh/server.ts";

export const handler = async (
  req: Request,
  ctx: HandlerContext
): Promise<Response> => {
  const url = new URL(req.url);
  const query = url.searchParams.get("mail") || "";
  console.log("req", query);

  if (query === "") {
    return new Response();
  }

  const responseFetch = await fetch("https://mydeno-prod.deno.dev");
  const data = await responseFetch.json();
  console.log("data", data);

  return new Response(data.accountLink.url);
};
