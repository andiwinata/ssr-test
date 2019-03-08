import Koa from 'koa';
import Router from 'koa-router';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Test } from './components/Test';

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
  const rendered = ReactDOMServer.renderToString(<Test />);
  ctx.body = rendered;
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
