import express, { Request, Response, NextFunction } from "express";
import mongoose from 'mongoose';
import methodOverride from 'method-override';
import { AppRouter } from './AppRouter';
import './controllers/ArticlesController';
import './controllers/RootController';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
const app = express();
const port = 8080; // default port to listen
mongoose.connect('mongodb://localhost/blog', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
});
app.use(morgan('common'));
const router = AppRouter.getInstance();
// Configure Express to use EJS
app.set("view engine", "ejs");
// what does this do?
app.use(express.urlencoded({ extended: false }));
// usage: deny other origin to use get function here
app.use(cors({ origin: 'http://localhost:3000' }));

// Hide the metadata of which server we are using in the browser
app.use(helmet());
app.use(methodOverride('_method'));

app.use(router);
// when user types a url that not exist
app.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
});
// when we encounter an error
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV == 'production' ? `🍰` : error.stack;
    });
});
// start the express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});