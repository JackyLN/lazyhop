
import { Express } from 'express';
import { createApp } from './app';
import { PORT } from './config/env';


const app : Express = createApp();

const server = app.listen(PORT, () => {
  console.log(`[server]: Server started at port ${PORT}`);
})