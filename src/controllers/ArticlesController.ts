import express, { Request, Response, Router, NextFunction } from 'express';
import { Article, article } from './../models/article';
import { get, controller, del, post, use, after, put } from './decorators';
import { RequestWithArticle } from './utils';
import { saveArticleAndRedirect } from './middlewares';
@controller('/articles')
class TestController {
    @get('/new')
    getNew(req: Request, res: Response) {
        res.render('articles/new', { article: new Article() });
    }

    @get('/edit/:id')
    async getEdit(req: Request, res: Response) {
        const article = await Article.findById(req.params.id);
        res.render('articles/edit', { article: article });
    }

    @get('/:slug')
    async getArticleBySlug(req: Request, res: Response) {
        const article = await Article.findOne({ slug: req.params.slug });
        if (article == null) res.redirect('/');
        res.render('articles/show', { article: article });
    }

    @del('/:id')
    async delById(req: Request, res: Response) {
        await Article.findByIdAndDelete(req.params.id);
        res.redirect('/');
    }

    @after(saveArticleAndRedirect("new"))
    @post('/')
    async postNewArticle(req: RequestWithArticle, res: Response, next: NextFunction) {
        req.article = new Article();
        next();
    }

    @after(saveArticleAndRedirect("edit"))
    @put('/:id')
    async editArticle(req: RequestWithArticle, res: Response, next: NextFunction) {
        const article = await Article.findById(req.params.id)
        if (article) {
            req.article = article;
        }
        next();
    }
    // articleRouter.post('/', async (req: RequestWithArticle, res: Response, next) => {
    //     req.article = new Article();
    //     next();
    // }, saveArticleAndRedirect("new"));

    // articleRouter.put('/:id', async (req: RequestWithArticle, res: Response, next) => {
    //     const article = await Article.findById(req.params.id)
    //     if (article) {
    //         req.article = article;
    //     }
    //     next();
    // }, saveArticleAndRedirect("edit"));
}