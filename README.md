# LHL Hockey

An amateur hockey league website and REST API built with NestJS, TypeScript, PostgreSQL, and a responsive HTML/CSS/JavaScript frontend. Its public demo is ready to browse without an account, database, or environment configuration.

## Screenshots

Screenshots show the website with sample league records.

| Homepage                                                       | Teams                                                   |
| -------------------------------------------------------------- | ------------------------------------------------------- |
| ![LHL Hockey homepage](public/screenshots/league-homepage.png) | ![League teams](public/screenshots/teams-directory.png) |

### Match schedule

![League match schedule](public/screenshots/match-schedule.png)

## Features

- League homepage with standings, news, team directory, and match countdown.
- Team profiles with roster, statistics, and match history.
- Match schedule with status, week, and team filters.
- Ready-to-browse portfolio site powered by bundled sample data when no API is connected.
- PostgreSQL persistence for teams, players, matches, and news, initialized by a TypeORM migration.
- Public REST endpoints: `GET /teams`, `GET /matches`, and `GET /news`.
- JWT-protected staff login and role-guarded `GET /admin/dashboard`.
- Request validation with `class-validator` and `ValidationPipe`.
- Swagger UI at `/api/docs`.
- NestJS unit tests, ESLint, Prettier, and TypeScript.

## View the portfolio demo

The site runs with sample league data out of the box:

```bash
npm ci
npm run start:dev
```

Open `http://localhost:3000`. No sign-in, database, or `.env` file is needed. GitHub Actions publishes the same ready-to-view site to [GitHub Pages](https://baichau.github.io/LHL-hockey/).

## Configure the optional database-backed API

Requirements: Node.js 20 or newer and PostgreSQL.

1. Install dependencies:

   ```bash
   npm ci
   ```

2. Create a PostgreSQL database, copy `.env.example` to `.env`, and set `DATABASE_URL`.
3. Generate a bcrypt password hash for the admin account:

   ```bash
   node -e "console.log(require('bcryptjs').hashSync('replace-this-password', 12))"
   ```

   Set the output as `ADMIN_PASSWORD_HASH`, choose `ADMIN_EMAIL`, and replace `JWT_SECRET` with a random secret of at least 32 characters. Never commit `.env`.

4. Start the application:

   ```bash
   npm run start:dev
   ```

   TypeORM runs the initial schema and sample-data migration at startup. When a database is configured, the browser loads data from the API; without one, it continues to display the bundled demo data. API documentation is at `http://localhost:3000/api/docs`.

## API

| Method | Endpoint           | Access                  | Description                                  |
| ------ | ------------------ | ----------------------- | -------------------------------------------- |
| `GET`  | `/teams`           | Public                  | Teams and player rosters                     |
| `GET`  | `/matches`         | Public                  | Fixtures and results                         |
| `GET`  | `/news`            | Public                  | League news                                  |
| `POST` | `/auth/login`      | Public                  | Exchange admin credentials for an 8-hour JWT |
| `GET`  | `/admin/dashboard` | `admin` or `editor` JWT | Verify staff identity and role               |

## Tests and quality checks

```bash
npm test
npm run test:e2e
npm run lint
npm run format
npm run build
```

## Deployment

The no-login demo is published to GitHub Pages on pushes to `main`. An optional API deployment can use the Render Blueprint in `render.yaml`: configure a PostgreSQL database, `DATABASE_URL`, `ADMIN_EMAIL`, a bcrypt `ADMIN_PASSWORD_HASH`, and a random `JWT_SECRET`. The initial database migration runs on service startup.

Set `DATABASE_SSL=true` only when the selected PostgreSQL provider requires TLS.

## Repository topics

`nestjs` · `typescript` · `hockey`
