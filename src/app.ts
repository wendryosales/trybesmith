import express from 'express';
import 'express-async-errors';
import errorHandling from './error/errorHandling';
import loginRouter from './routers/login.router';
import ordersRouter from './routers/orders.router';
import productRouter from './routers/products.router';
import usersRouter from './routers/users.router';

const app = express();

app.use(express.json());

app.use('/login', loginRouter);

app.use('/products', productRouter);

app.use('/users', usersRouter);

app.use('/orders', ordersRouter);

app.use(errorHandling);
export default app;
