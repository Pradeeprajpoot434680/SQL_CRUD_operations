

import { Client } from "pg";
export async function getClient()
{
    const client = new Client('postgresql://my_sql_database_owner:lS6UCuaRPJ7V@ep-proud-smoke-a873yuj4-pooler.eastus2.azure.neon.tech/my_sql_database?sslmode=require');
    await client.connect();
    return client;
}