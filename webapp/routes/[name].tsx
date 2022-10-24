import { PageProps, Handlers } from "$fresh/server.ts";
import Countdown from "../islands/Coundown.tsx";

export const handler: Handlers = {
  async GET(req, ctx) {
    console.log("state", ctx.state);

    return await ctx.render();
  },
};

export default function Greet(props: PageProps) {
  const date = new Date();
  date.setHours(date.getHours() + 1);

  return (
    <div>
      Hello {props.params.name}
      <div>
        <Countdown target={date.toISOString()} />{" "}
      </div>
    </div>
  );
}
