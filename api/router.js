import Router from "@koa/router";

export const router = new Router();

router.get("/", async (ctx) => {
  ctx.body = { ola: "Mundo" };
});

router.get("/router", async (ctx) => {
  ctx.body = { ola: "Mundo" };
});