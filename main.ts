import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
import * as dotenv from 'https://deno.land/x/denoenv/mod.ts';
import router from './routes/auth.routes.ts';

const config = dotenv.config({ debug: true });

const app: Application = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

console.log('Server running on port', config.PORT);
await app.listen({ port: +config.PORT });
