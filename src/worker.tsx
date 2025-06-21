import { defineApp, type RequestInfo } from "rwsdk/worker";
import { route, render, prefix, layout } from "rwsdk/router";
import { Document } from "@/app/Document";
import { setCommonHeaders } from "@/app/headers";
import { env } from "cloudflare:workers";
import { Home } from "@/app/pages/Home";
import { sessionMiddleware } from "@/session/session";
import { AppLayout } from "@/app/Applayout";
import type { AuthSession } from "@lib/auth";

export type AppContext = {
  session: AuthSession | null;
};


//TODO: Need a map of items from the db/blink that map to the router below 
export default defineApp<RequestInfo<any, AppContext>>([
  //TODO: Flag to enable/disable this
  setCommonHeaders(),
  render(Document, [
    //Add this to protected routes
    sessionMiddleware,
    route("/", () => <Home />),
    layout(AppLayout, [
      route("/protected", () => {
        return new Response("Protected")
      }),
      prefix("/api", [
        route("/get-content", () => {
          return new Response("Protected")
        }),
      ]),
    ]),
  ]),
]);
