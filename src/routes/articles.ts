import express, { Request, Response, Router } from 'express';
import { Article, article } from './../models/article';
const articleRouter = express.Router();
// articleRouter.get('/new', (req: Request, res: Response) => {
//     res.render('articles/new', { article: new Article() });
// });
articleRouter.get('/edit/:id', async (req: Request, res: Response) => {
    const article = await Article.findById(req.params.id);
    res.render('articles/edit', { article: article });
});
articleRouter.get('/:slug', async (req: Request, res: Response) => {
    const article = await Article.findOne({ slug: req.params.slug });
    if (article == null) res.redirect('/');
    res.render('articles/show', { article: article });
});

interface RequestWithArticle extends Request {
    article?: article;
}
articleRouter.post('/', async (req: RequestWithArticle, res: Response, next) => {
    req.article = new Article();
    next();
}, saveArticleAndRedirect("new"));

articleRouter.put('/:id', async (req: RequestWithArticle, res: Response, next) => {
    const article = await Article.findById(req.params.id)
    if (article) {
        req.article = article;
    }
    next();
}, saveArticleAndRedirect("edit"));
articleRouter.delete('/:id', async (req: Request, res: Response) => {
    await Article.findByIdAndDelete(req.params.id);
    res.redirect('/');
});

function saveArticleAndRedirect(path: string) {
    return async (req: RequestWithArticle, res: Response) => {
        let article = req.article;
        if (article) {
            article.title = req.body.title;
            article.description = req.body.description;
            article.markdown = req.body.markdown;
            try {
                await article.save();
                res.redirect(`/articles/${article.slug}`)
            } catch (e) {
                res.render(`articles/${path}`, { article: article });
            }
        }
    }
}
export { articleRouter };