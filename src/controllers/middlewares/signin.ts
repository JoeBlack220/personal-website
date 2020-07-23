import { Response, NextFunction, Request } from 'express';
import passport from '../../passport';
import { issueJWT } from '../../passport/lib/utils';
export async function signin(req: Request, res: Response, next: NextFunction) {
    passport.authenticate('local-signin', { session: false }, (error, user, info) => {
        if (error) {
            return res.status(500).json({
                message: error || "Ooops, something happened",
                error: error.message || "Inter server error"
            });
        }
        // req.logIn(user, (error) => {
        //     if (error) {
        //         console.log(error);
        //         return res.status(500).json({
        //             message: error || "Ooops, something happend"
        //         });
        //     }

        // });

        // // we can add data to the session here
        // user.isAuthenticated = true;
        const jwt = issueJWT(user);
        // return res.json({ success: true, user: user,})

        return res.json({ success: true, user: user, token: jwt.token, expiresIn: jwt.expires })
        // return res.json(user);
    })(req, res, next)
}