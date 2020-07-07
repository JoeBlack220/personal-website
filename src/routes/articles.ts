import express, { Request, Response, Router } from 'express';
import { Article, article } from './../models/article';
const articleRouter = express.Router();
articleRouter.get('/new', (req: Request, res: Response) => {
    res.render('articles/new', { article: new Article() });
});
articleRouter.get('/:id', async (req: Request, res: Response) => {
    const article = await Article.findById(req.params.id);
    if (article == null) res.redirect('/');
    res.render('articles/show', { article: article });
});
articleRouter.post('/', async (req: Request, res: Response) => {
    const article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    });
    try {
        await article.save();
        res.redirect(`/articles/${article.id}`)
    } catch (e) {
        res.render('articles/new', { article: article });
    }
});
export { articleRouter };