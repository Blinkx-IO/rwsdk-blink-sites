import { drizzle } from 'drizzle-orm/d1';
import { env } from 'cloudflare:workers';

export const d1_client = drizzle(env.blink_d1_db);



