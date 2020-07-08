import express, { Request, Response, Router } from 'express';
import { Article, article } from './../models/article';
import { get } from './decorators/routes';
import { controller } from './decorators/controller';
@controller('/articles')
class TestController {
    @get('/new')
    getNew(req: Request, res: Response) {
        res.render('articles/new', { article: new Article() });
    }
}