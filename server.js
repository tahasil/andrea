const express = require('express');
const { parse } = require('url');
const next = require('next');
const cors = require('cors');
const mongoose = require('mongoose');
const compression = require('compression');
const port = process.env.PORT || 3000;
const user = require('./src/app/router/User/User.router');
const server = next({});
const handle = server.getRequestHandler();
process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});
server.prepare().then(() => {
  const app = express();

  //compresses the req from client
  app.use(compression());
  app.use(cors());
  app.options('*', cors());

  const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
  );
  mongoose
    .connect(DB, {})
    .then(() => console.log('Successfully connected to the database' + DB))
    .catch((err) => {
      console.log('Could not connect to the database. Exiting now...', err);
      process.exit();
    });

  mongoose.set('debug', true);
  app.use(express.json());
  app.use('/user', user);

  app.all('*', (req, res) => {
    // Make sure that Next.js can handle requests to `_next` routes
    if (req.url.startsWith('/_next')) {
      return handle(req, res);
    }
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if (pathname === '/a') {
      return app.render(req, res, '/a', query);
    } else if (pathname === '/b') {
      return app.render(req, res, '/b', query);
    } else {
      return handle(req, res);
    }
  });

  app.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
