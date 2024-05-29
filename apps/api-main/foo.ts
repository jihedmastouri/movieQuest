import 'dotenv/config';
import * as jose from 'jose';

import { Context } from 'hono';
import { z } from 'zod';

const JWT_SECRET = process.env.JWT_SECRET;
const jwtKey = new TextEncoder().encode(JWT_SECRET);


export const bar = async (c: Context ) => {
  const { username, password } = (await c.req.json());
  if (username === 'admin' && password === 'admin') {
    const token = await new jose.SignJWT({
      iss: 'hono',
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('5min')
      .sign(jwtKey);

    const refresh = await new jose.SignJWT({
      iss: 'hono',
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('50days')
      .sign(jwtKey);

    c.json({ token, refresh });
  } else {
    c.status(401);
    c.json({ message: 'Unauthorized' });
  }
};
