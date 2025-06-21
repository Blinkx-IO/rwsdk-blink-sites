import { type RequestInfo } from "rwsdk/worker";
import { type AppContext } from "@/worker";
import { auth } from "@lib/auth";


export async function sessionMiddleware({ ctx, request }: RequestInfo<any, AppContext>) {
	const session = await auth.api.getSession({ headers: request.headers })
	if (session) return new Response("Not valid", { status: 303, headers: { location: "/" } });

	//NOTE: Do anything else that needs to stick to the session here
	ctx.session = session;

}
