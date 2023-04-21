import express, { Request, Response, NextFunction } from 'express';

import { getMain } from './controller/main';

const app = express();

app.get('/', getMain);

app.listen('1234', () => {
  console.log(`
  ################################################
  🛡️  Server listening on port: 1234🛡️
  ################################################
`);
});
