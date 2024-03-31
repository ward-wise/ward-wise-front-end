# Ward Wise Frontend

This is a refactored, reimagined, and expanded implementation of the current [Ward Wise frontend](https://github.com/ward-wise/alderman-spending-data-viz), built in Next.js.

## Low-fidelity Prototype
Here is a lo-fi paper mockup of the site; consider this a rough place to start from.
![PXL_20240110_014235957~2](https://github.com/ward-wise/ward-wise-front-end/assets/28895925/e687037f-e2f5-4452-bc0a-c31866e22e38)
We are planning to make it a single-page scroll website, so the following is the rough layout for the same.
![PXL_20240110_014252656~2](https://github.com/ward-wise/ward-wise-front-end/assets/28895925/b2f91a6d-076f-40ee-a703-31c23c918973)

## Setup

1. Clone/Fork the repo and install dependencies (`npm install`)

2. Install [PostgreSQL](https://www.postgresql.org/docs/current/tutorial-install.html), if you do not already have an instance installed.

3. Run `createdb wardwise` in your terminal. 
> **Note:** If PostgreSQL was not added to your system PATH during installation, you'll need to be in the PostgreSQL `bin` directory for this command to work.

4. Create a `.env.local` file in your project directory and add the below, where USERNAME and PASSWORD are the credential for:
    * your system user
    * the user authorized to run Postgres on your machine, or
    * the **postgres** admin account setup during installation
```
DATABASE_URL="postgresql://USERNAME:PASSWORD@localhost:5432/wardwise?schema=public"
```

5. Run `npm run migrate:dev` to create tables and seed your database. If the seeding does not happen automatically, run `npm run db:seed`.

6. Run `npm run dev` to start a development server (located at [http://localhost:3000](http://localhost:3000) by default)

For additional database management scripts, see `package.json`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
