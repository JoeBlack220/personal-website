import { Request, Response, NextFunction } from 'express';
import { Article } from './../models/article';
import { get, controller, del, post, use, after, put } from './decorators';
import { authenticate } from './middlewares';
import passport from '../passport';
@controller('/auth')
class AuthController {
    // Handling local strategy for signing up
    // We need customized callbacks since our react front end only need/can parse json
    @post('/signup')
    @use(authenticate('local-signup'))
    signup(req: Request, res: Response, next: NextFunction) {
        // do nothing, the middleware should handle everything
    }
    @post('/signin')
    @use(authenticate('local-signin'))
    signin(req: Request, res: Response, next: NextFunction) {
        // do nothing, the middleware should handle everything

    }
    // test whethen we can get the current user's session info
    @get('/test')
    test(req: Request, res: Response, next: NextFunction) {
        const email = req.user;
        res.send(email);
    }
    // TODO: set proper return values
    @get('/logout')
    logout(req: Request, res: Response, next: NextFunction) {
        req.logout();
        res.send({ logout: true });
    }

}

