import {
  createRouter,
  contentTypeFilter,
  ServerRequest,
} from "https://servestjs.org/@v1.1.9/mod.ts";

// import { OrderUseCase } from './src/UseCases/orders/index.ts';

import { registerItemSku } from './src/controllers/itemSkus/registerItemSkus/index.ts';
import { ChangeUserInfo } from './src/controllers/users/changeUserInfo/index.ts';

const changeUserInfo = new ChangeUserInfo();

export const routes = () => {
  const router = createRouter();

  router.get("posts", getAllPosts);
  router.get("orders/cancel", cancelOrder);
  router.post("orders/cancel", contentTypeFilter("application/json"), cancelOrder);
  router.post("item-skus/register", contentTypeFilter("application/json"), registerItemSku);
  // router.get(new RegExp("^posts/(.+)"), getPost);

  router.put("users/change-info", contentTypeFilter("application/json"), changeUserInfo.handler)

  return router;
};

const getAllPosts = async (req: ServerRequest) => {
  const allPosts = [
    {
      title: 'sun',
      author: 'peter',
    },
    {
      title: 'moon',
      author: 'steve',
    },
  ];
  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "application/json",
    }),
    body: JSON.stringify(allPosts),
  });
}

const cancelOrder = async (req: ServerRequest) => {
  const bodyJson = await req.json();
  // const orderUseCase = new OrderUseCase();
  // await orderUseCase.cancel(bodyJson.orderId);

  console.log('aaaaaaa')

  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "application/json",
    }),
    body: JSON.stringify({ desc: 'cancel完了' }),
  });
}
