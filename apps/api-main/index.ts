import 'dotenv/config';

import { Hono } from 'hono';
import { bearerAuth } from 'hono/bearer-auth';
import bcrypt from 'bcryptjs';
import * as jose from 'jose';

import { zValidator } from '@hono/zod-validator';
import { z } from 'zod';
const loginInfoSchema = z.object({
  username: z.string(),
  password: z.string(),
});

import { JWTPayload } from './types';
import { bar } from './foo';

const SALT_SECRET = process.env.SALT_SECRET;
const salt = bcrypt.genSaltSync(SALT_SECRET);

const JWT_SECRET = process.env.JWT_SECRET;
const jwtKey = new TextEncoder().encode(JWT_SECRET);

const app = new Hono();

/**
 * Auth
 **/

app.use(
  '/protected/*',
  bearerAuth({
    verifyToken: async (token) => {
      try {
        const { payload: jwtData } = (await jose.jwtVerify(token, jwtKey)) as {
          payload: JWTPayload;
        };

        const ttl = new Date(jwtData.iat * 1000 + jwtData.exp).getTime() / 1000;
        if (ttl < Date.now() / 1000) {
          return false;
        }

        return true;
      } catch (error) {
        return false;
      }
    },
  })
);

app.post('/login', zValidator('json', loginInfoSchema), bar);

app.post('/register', async (c) => {
  const { username, password } = await c.json();
  const hash = bcrypt.hashSync(password, salt);
  c.json({ username, hash });
});

app.post('/', async (c) => {
  c.text('Hello World!');
});

export default app;
