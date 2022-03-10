CS 465/565 Final Project: Todo App

To build the back-end of this project, you'll need to have `npm` and `nodejs`
installed.

Clone the repo at `https://github.com/malker97/cs565fullstackproject.git` and
navigate to `/src/backend`.

You'll need a `.env` in `/src/backend` with the following lines:

```
DBUSERNAME=<YOUR_MONGODB_USERNAME>
DBPASSWORD=<YOUR_MONGODB_PASSWORD>
```

Then, to install dependencies: `npm install`.

To start the server in production mode: `npm run start`.

To start the server in development mode: `npm run dev`.

To start the server with the debugger on: `npm run debug`.

The server is configured in `/bin/www` to run on port `3010`.
