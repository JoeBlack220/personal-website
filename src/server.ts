import express, { Request, Response, NextFunction } from "express";
import mongoose from 'mongoose';
import methodOverride from 'method-override';
import { AppRouter } from './AppRouter';
import './controllers/ArticlesController';
import './controllers/RootController';
import './controllers/AuthControllers';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import passport from './passport';
import cookieSession from 'cookie-session';


// Read global configuration
dotenv.config();
const app = express();
const port = process.env.PORT; // default port to listen

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/blog', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
});
// Todo: Find out what these line do
app.use(morgan('common'));
app.use(helmet());
const router = AppRouter.getInstance();
// Configure Express to use EJS
app.set("view engine", "ejs");

// add parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// set up cookie session
app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
}))
// usage: deny other origin to use get function here
app.use(cors({ origin: process.env.CORS_ORIGIN }));
// Hide the metadata of which server we are using in the browser
app.use(methodOverride('_method'));

// Using passport to do Oauth
app.use(passport.initialize());
app.use(passport.session());

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
        stack: process.env.NODE_ENV == 'production' ? `🍰` : error.stack
    });
});
// start the express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});