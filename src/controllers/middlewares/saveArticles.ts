import { RequestWithArticle } from '../utils';
import { Response, NextFunction } from 'express';
export function saveArticleAndRedirect(path: string) {
    return async (req: RequestWithArticle, res: Response, next: NextFunction) => {
        let article = req.article;
        if (article) {
            article.title = req.body.title;
            article.description = req.body.description;
            article.markdown = req.body.markdown;
            // console.log(article.title);
            // console.log(req.body.description);
            // console.log(req.body.markdown);

            try {
                await article.save();
                res.send({});
            } catch (e) {
                console.log("Can't save this article");
                res.status(401);
                res.send("None shall pass");
            }
        }
    }
}