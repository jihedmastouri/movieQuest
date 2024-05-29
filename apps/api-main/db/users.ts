import { integer, sqliteTable, text, primaryKey } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email').unique(),
  numFollowing: integer('following').default(0),
  numFollowers: integer('followers').default(0),
  externalId: text('externalId').unique(),
  fullname: text('username'),
  password: text('password'),
});

export const connections = sqliteTable('connections', {
  userId: integer('userId').references(() => users.id),
  refreshToken: text('refreshToken'),
  device: text('device'),
});

export const usersFollowers = sqliteTable(
  'users_followers',
  {
    userId: integer('userId').references(() => users.id),
    followerId: integer('followerId').references(() => users.id),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.userId, table.followerId] }),
    };
  }
);

