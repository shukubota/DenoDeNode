
import {
  ServerRequest,
} from "https://servestjs.org/@v1.0.0/mod.ts";
import { RegisterItemSkus } from "../../../UseCases/itemSkus/registerItemSkus/index.ts";

export const registerItemSku = async (req: ServerRequest) => {
  const bodyJson = await req.json();
  const registerItemSkus = new RegisterItemSkus();
  await registerItemSkus.execute();

  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "application/json",
    }),
    body: JSON.stringify({ desc: 'itemSku登録完了' }),
  });
}