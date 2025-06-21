import { d1_client } from "@db/d1/client";
import { betterAuth } from "better-auth";
import * as schema from "@db/d1/schema";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

export const auth = betterAuth({
    database: drizzleAdapter(d1_client, { provider: "sqlite", schema }),
});


export type AuthSession = typeof auth.$Infer.Session;
