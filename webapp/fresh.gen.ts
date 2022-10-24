// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/[name].tsx";
import * as $1 from "./routes/_app.tsx";
import * as $2 from "./routes/about/[username].tsx";
import * as $3 from "./routes/api/joke.ts";
import * as $4 from "./routes/api/searchst.ts";
import * as $5 from "./routes/index.tsx";
import * as $6 from "./routes/search.tsx";
import * as $$0 from "./islands/Badge.tsx";
import * as $$1 from "./islands/Coundown.tsx";
import * as $$2 from "./islands/Counter.tsx";

const manifest = {
  routes: {
    "./routes/[name].tsx": $0,
    "./routes/_app.tsx": $1,
    "./routes/about/[username].tsx": $2,
    "./routes/api/joke.ts": $3,
    "./routes/api/searchst.ts": $4,
    "./routes/index.tsx": $5,
    "./routes/search.tsx": $6,
  },
  islands: {
    "./islands/Badge.tsx": $$0,
    "./islands/Coundown.tsx": $$1,
    "./islands/Counter.tsx": $$2,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
