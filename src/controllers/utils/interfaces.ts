import { Article, article } from '../../models/article';
import { Request } from 'express'
export interface RequestWithArticle extends Request {
    article?: article;
}