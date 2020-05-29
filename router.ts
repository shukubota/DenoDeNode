import {
  createRouter,
  contentTypeFilter,
  ServerRequest,
} from "https://servestjs.org/@v1.0.0/mod.ts";

import { OrderUseCase } from './src/UseCases/orders/index.ts';

export const routes = () => {
  const router = createRouter();

  router.get("posts", getAllPosts);
  router.get("orders/cancel", cancelOrder);
  router.post("orders/cancel", contentTypeFilter("application/json"), cancelOrder);
  // router.get(new RegExp("^posts/(.+)"), getPost);

  return router;
};

const getAllPosts = async (req: ServerRequest) => {
  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "application/json",
    }),
    body: JSON.stringify({ desc: 'post全部返すよ' }),
  });
}

const cancelOrder = async (req: ServerRequest) => {
  const bodyJson = await req.json();
  const orderUseCase = new OrderUseCase();
  await orderUseCase.cancel(bodyJson.orderId);

  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "application/json",
    }),
    body: JSON.stringify({ desc: 'cancel完了' }),
  });
}