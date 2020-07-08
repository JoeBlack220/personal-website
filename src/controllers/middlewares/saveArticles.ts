import { RequestWithArticle } from '../utils';
import { Response, NextFunction } from 'express';
export function saveArticleAndRedirect(path: string) {
    return async (req: RequestWithArticle, res: Response, next: NextFunction) => {
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