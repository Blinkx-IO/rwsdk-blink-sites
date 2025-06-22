import * as dotenv from 'dotenv';
import { defineConfig } from 'drizzle-kit';
dotenv.config();

//SORT THIS OUT TO FIND local d1 in .wrangler/state/d1
export default defineConfig({
	out: './db/d1/migrations',
	schema: './db/d1/schema.ts',
	dialect: 'sqlite',
	// driver: 'd1-http',
	dbCredentials: {
		url: process.env.LOCAL_D1!
	}
	// dbCredentials: {
	// 	accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
	// 	databaseId: process.env.CLOUDFLARE_DATABASE_ID!,
	// 	token: process.env.CLOUDFLARE_D1_TOKEN!,
	// },
});
