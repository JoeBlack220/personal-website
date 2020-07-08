import express from "express";
import mongoose from 'mongoose';
import methodOverride from 'method-override';
import { AppRouter } from './AppRouter';
import './controllers/ArticlesController';
import './controllers/RootController'
const app = express();
const port = 8080; // default port to listen
mongoose.connect('mongodb://localhost/blog', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
});

const router = AppRouter.getInstance();
// Configure Express to use EJS
app.set("view engine", "ejs");
// what does this do?
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(router);
// app.use("/articles", articleRouter);

// start the express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});