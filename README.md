# Ward Wise Frontend

This is a refactored, reimagined, and expanded implementation of the current [Ward Wise frontend](https://github.com/ward-wise/alderman-spending-data-viz), built in Next.js.



## Setup

- Clone/Fork the repo and install dependencies (`npm install`)

- Install [PostgreSQL](https://www.postgresql.org/docs/current/tutorial-install.html), if you do not already have an instance installed

- run `createdb wardwise` in your terminal

- create a `.env.local` file in your project directory, and add:
```
DATABASE_URL="postgresql://USERNAME:PASSWORD@localhost:5432/wardwise?schema=public"
```
where USERNAME and PASSWORD are the credential for your system user/the user authorized to run Postgres on your machine

- run `npm run migrate:dev` to create tables and seed your database

- `npm run dev` to start a development server (located at [http://localhost:3000](http://localhost:3000) by default)

For additional database management scripts, see `package.json`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
