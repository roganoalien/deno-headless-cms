import { MongoClient } from "https://deno.land/x/mongo@v0.8.0/mod.ts";
import * as dotenv from "https://deno.land/x/denoenv/mod.ts";

const config = dotenv.config({ debug: true });

const client = new MongoClient();
client.connectWithUri("mongodb://localhost:27017");

const db = client.database(config.DB_NAME);

export default db;
