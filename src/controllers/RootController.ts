import express, { Request, Response, Router } from 'express';
import { Article, article } from './../models/article';
import { get, controller } from './decorators';

@controller('')
class RootController {
    @get('/')
    async getNew(req: Request, res: Response) {
        const articles = await Article.find().sort({
            createdAt: 'desc'
        });
        // render the index template
        res.send(articles);
    }
}