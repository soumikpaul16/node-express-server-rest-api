import cors from 'cors';
import express from 'express';

import models from './models/index';
import routes from './routes/index';
import { Router } from 'express';

const router = Router();

const app = express();

// * Application-Level Middleware * //

// Third-Party Middleware

app.use(cors());

// Built-In Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom Middleware

app.use((req, res, next) => {
  req.context = {
    models,
  };
  next();
});

// * Routes * //

app.use(
  '',
  router.get('/', (req, res) => {
    return res.send('success');
  }),
);
app.use('/products', routes.products);
app.use('/banners', routes.banners);
app.use('/addToCart', routes.addToCart);
app.use('/categories', routes.categories);

// * Start * //

app.listen(3000, () =>
  console.log(`Example app listening on port 3000!`),
);