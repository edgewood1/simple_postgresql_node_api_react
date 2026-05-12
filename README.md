# simple-postgresql-node-api-react

A minimal full-stack app demonstrating a PostgreSQL-backed Node/Express REST API with a React frontend.

## Tech Stack

- **Frontend:** React
- **Backend:** Node.js, Express
- **Database:** PostgreSQL

## Getting Started

1. Start your PostgreSQL server:
   ```bash
   pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start
   ```
2. Update the pg config in the server with your database name, table, and port
3. Install dependencies and start:
   ```bash
   npm install
   node server.js
   ```

Open the browser console to see API responses.
