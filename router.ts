import {
  createRouter,
  contentTypeFilter,
  ServerRequest,
} from "https://servestjs.org/@v1.0.0/mod.ts";

export const routes = () => {
  const router = createRouter();

  router.get("posts", getAllPosts);
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