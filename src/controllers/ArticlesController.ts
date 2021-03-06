import { Request, Response, NextFunction } from 'express';
import { Article } from './../models/article';
import { get, controller, del, post, use, after, put } from './decorators';
import { RequestWithArticle } from './utils';
import { saveArticleAndRedirect } from './middlewares';
@controller('/articles')
class ArticleController {

    // Should first retrieve corresponding article as 
    // default value of each field.
    @get('/edit/:id')
    async getEdit(req: Request, res: Response) {
        const article = await Article.findById(req.params.id);
        res.send(article);
    }

    @get('/:slug')
    async getArticleBySlug(req: Request, res: Response) {
        const article = await Article.findOne({ slug: req.params.slug });
        // if (article == null) res.redirect('/');
        // res.render('articles/show', { article: article });
        res.send(article);
    }

    @del('/:id')
    async delById(req: Request, res: Response) {
        await Article.findByIdAndDelete(req.params.id);
        // res.redirect('/');
    }

    // works fine
    @after(saveArticleAndRedirect("new"))
    @post('/')
    async postNewArticle(req: RequestWithArticle, res: Response, next: NextFunction) {
        req.article = new Article();
        next();
    }
    // works fine
    @after(saveArticleAndRedirect("edit"))
    @put('/:id')
    async editArticle(req: RequestWithArticle, res: Response, next: NextFunction) {
        const article = await Article.findById(req.params.id)
        if (article) {
            req.article = article;
        }
        next();
    }
}

