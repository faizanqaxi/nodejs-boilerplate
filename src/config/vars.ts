import { join } from 'path';
import dotnev from 'dotenv-safe';

// import .env variables
dotnev.config({
  path: join(__dirname, '../../.env'),
  example: join(__dirname, '../../.env.example'),
});

export const env = process.env.NODE_ENV;
export const port = process.env.PORT;
