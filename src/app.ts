import express from 'express';
import 'express-async-errors';
import errorHandling from './middleware/errorHandling';
import productRouter from './routers/products.router';

const app = express();

app.use(express.json());

app.use('/products', productRouter);

app.use(errorHandling);
export default app;
