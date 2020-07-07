import express, { Request, Response, Router } from 'express';
import { Article, article } from './../models/article';
const articleRouter = express.Router();
articleRouter.get('/new', (req: Request, res: Response) => {
    res.render('articles/new', { article: new Article() });
});
articleRouter.get('/:slug', async (req: Request, res: Response) => {
    const article = await Article.findOne({ slug: req.params.slug });
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
        res.redirect(`/articles/${article.slug}`)
    } catch (e) {
        res.render('articles/new', { article: article });
    }
});

articleRouter.delete('/:id', async (req: Request, res: Response) => {
    await Article.findByIdAndDelete(req.params.id);
    res.redirect('/');
});
export { articleRouter };