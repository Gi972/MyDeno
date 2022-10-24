import Counter from "../islands/Counter.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { apply, tw } from "twind";

export const handler: Handlers<void | null> = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const mail = url.searchParams.get("mail") || "";

    if (mail === "") {
      return ctx.render(null);
    }

    const resp = await fetch(`http://localhost:8000/api/searchst?mail=${mail}`);

    if (resp.status === 404) {
      return ctx.render(null);
    }

    const link = await resp.text();

    if (link) {
      return Response.redirect(link);
    }

    return ctx.render(null);
  },
};

export default function Home() {
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <img
        src="/logo.svg"
        class="w-32 h-32"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />

      <form>
        <div className={tw`space-x-1`}>
          <input type="email" name="mail" className={tw`px-1 border-1`} />
          <button type="submit" className={tw`px-1 border-1`}>
            lauch stripe s
          </button>
        </div>
      </form>
    </div>
  );
}
