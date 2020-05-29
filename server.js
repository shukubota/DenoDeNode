import { serve } from "https://deno.land/std@0.50.0/http/server.ts";
const server = serve({ port: 8001 });

for await (const req of server) {
  console.log('http://localhost:8001');
  req.respond({ body: "Hello\n"});
}