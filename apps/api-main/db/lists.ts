import { integer, sqliteTable, text, primaryKey } from 'drizzle-orm/sqlite-core';
import { users } from './users';
import { media } from './media';

const visibilityTypes = ['private', 'public', 'protected'] as const;
type VisibilityType = (typeof visibilityTypes)[number];

export const lists = sqliteTable('list', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  userId: integer('userId').references(() => users.id),
  visibility: text('visibility').$type<VisibilityType>().default('private'),
  following: integer('following').default(0),
  name: text('name').notNull(),
  description: text('description'),
});

export const listsMedia = sqliteTable(
  'lists_media',
  {
    listId: integer('listId').references(() => lists.id),
    mediaId: integer('mediaId').references(() => media.id),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.listId, table.mediaId] }),
    };
  }
);

export const listsFollowers = sqliteTable(
  'lists_followers',
  {
    listId: integer('listId').references(() => lists.id),
    userId: integer('userId').references(() => users.id),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.listId, table.userId] }),
    };
  }
);

