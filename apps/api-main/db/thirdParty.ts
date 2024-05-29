import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { users } from './users';

export const thirdPartyServices = sqliteTable('third_party_services', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  userId: integer('userId').references(() => users.id),
  service: text('service'),
  token: text('token'),
  url: text('url'),
  active: integer('active').default(0),
  tokenSecret: text('tokenSecret'),
  tokenExpires: integer('tokenExpires'),
});
