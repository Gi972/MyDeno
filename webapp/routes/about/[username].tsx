import { Handlers, PageProps } from "$fresh/server.ts";

interface User {
  login: string;
  name: string;
  avatar_url: string;
}

function delay(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export const handler: Handlers = {
  async GET(_, ctx) {
    const { username } = ctx.params;

    await delay(5000);

    const resp = await fetch(`https://api.github.com/users/${username}`);

    console.log(resp);

    if (resp.status === 404) {
      return ctx.render(null);
    }
    const user: User = await resp.json();
    return ctx.render(user);
  },
};

export default function ABout({ data }: PageProps<User | null>) {
  console.log("data");

  if (!data) {
    return <h1>User not found</h1>;
  }

  return (
    <div>
      <img src={data.avatar_url} width={64} height={64} />
      <h1>{data.name}</h1>
      <p>{data.login}</p>
    </div>
  );
}
