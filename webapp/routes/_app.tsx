import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Badge from "../islands/Badge.tsx";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/app.css" />
      </Head>
      <Badge />
      <Component />
    </>
  );
}
