import express from "express";
import { articleRouter } from './routes/articles';
import mongoose from 'mongoose';
import { Article } from './models/article';
const app = express();
const port = 8080; // default port to listen
mongoose.connect('mongodb://localhost/blog', {
    useNewUrlParser: true, useUnifiedTopology: true
})
// Configure Express to use EJS
app.set("view engine", "ejs");
// what does this do?
app.use(express.urlencoded({ extended: false }));
app.use("/articles", articleRouter);

// define a route handler for the default home page
app.get("/", async (req, res) => {
    const articles = await Article.find().sort({
        createdAt: 'desc'
    });
    // render the index template
    res.render("articles/index", { articles: articles });
});

// start the express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});