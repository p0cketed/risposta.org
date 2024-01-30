// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_auth_callback from "./routes/api/auth/callback.ts";
import * as $api_auth_login from "./routes/api/auth/login.ts";
import * as $api_auth_logout from "./routes/api/auth/logout.ts";
import * as $dashboard_id_create from "./routes/dashboard/[id]/create.tsx";
import * as $dashboard_index from "./routes/dashboard/index.tsx";
import * as $dashboard_user from "./routes/dashboard/user.tsx";
import * as $index from "./routes/index.tsx";
import * as $login from "./routes/login.tsx";
import * as $signup from "./routes/signup.tsx";
import * as $PostQuestion from "./islands/PostQuestion.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/auth/callback.ts": $api_auth_callback,
    "./routes/api/auth/login.ts": $api_auth_login,
    "./routes/api/auth/logout.ts": $api_auth_logout,
    "./routes/dashboard/[id]/create.tsx": $dashboard_id_create,
    "./routes/dashboard/index.tsx": $dashboard_index,
    "./routes/dashboard/user.tsx": $dashboard_user,
    "./routes/index.tsx": $index,
    "./routes/login.tsx": $login,
    "./routes/signup.tsx": $signup,
  },
  islands: {
    "./islands/PostQuestion.tsx": $PostQuestion,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
