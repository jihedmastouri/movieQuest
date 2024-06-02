# movieQuest

A platform for couch potatos to explore movies and TV shows, track progress and rank up.

Designed By: [Othmen Maneri](https://www.behance.net/othmenmaneri)

## The Tech

This is a mono-repo that uses `Turbo` and `pnpm`.

### Apps:

- `native`: [React Native](https://reactnative.dev/) app built with [Expo](https://docs.expo.dev/)
- `web`: [Remix](https://remix.run) app built with [react-native-web](https://necolas.github.io/react-native-web/)
- `api-main`: built with [Hono](https://nextjs.org/), SQLite (libSQL [Truso](https://turso.tech)) and [Drizzle](https://www.prisma.io/) ORM.
- `api-media`: built with [Fastify](https://fastify.dev/) and MongoDB (using Mongoose).

### Packages:

- `core-lib`: a shared package for type definitions and validations.
- `core-app`: a shared package for business logic and UI components.

## License

Movie Quest - A gamified platform to explore movies and TV shows, and track progress.

Copyright (C) 2024 Jihed Mastouri & contributors.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.

