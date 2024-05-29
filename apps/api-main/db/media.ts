import { integer, sqliteTable, text, primaryKey, foreignKey } from 'drizzle-orm/sqlite-core';
import { users } from './users';

const mediaTypes = ['movie', 'tv', 'episode'] as const;
type MediaType = (typeof mediaTypes)[number];

export const media = sqliteTable('media', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  slug: text('slug').unique().notNull(),
  name: text('name'),
  mediaTypes: text('type').$type<MediaType>().default('movie'),
  tmdbId: integer('tmdbId').unique().notNull(),
  rating: integer('rating').default(0),
  ratingCount: integer('ratingCount').default(0),
  watched: integer('watched').default(0),
});

export const mediaInteractions = sqliteTable(
  'media_interactions',
  {
    userId: integer('userId').references(() => users.id),
    mediaId: integer('mediaId').references(() => media.id),
    rating: integer('rating'),
    saved: integer('saved'),
    favorite: integer('favorite'),
    watched: integer('watched'),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.userId, table.mediaId] }),
    };
  }
);

export const comments = sqliteTable(
  'comments',
  {
    id: integer('id').primaryKey({ autoIncrement: true }),
    movieId: integer('movieId').references(() => media.id),
    userId: integer('userId').references(() => users.id),
    commentId: integer('commentId'),
    comment: text('comment'),
  },
  (table) => {
    return {
      parentReference: foreignKey({
        columns: [table.commentId],
        foreignColumns: [table.id],
        name: 'fk_comments_self_reference',
      }),
    };
  }
);

export const commentsLike = sqliteTable(
  'comments_likes',
  {
    movieId: integer('movieId').references(() => media.id),
    userId: integer('userId').references(() => users.id),
    commentId: integer('commentId').references(() => comments.id),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.movieId, table.userId, table.commentId] }),
    };
  }
);
