import { Response, NextFunction, Request } from 'express';
import passport from '../../passport';
import { issueJWT } from '../../passport/lib/utils';
export async function authenticate(req: Request, res: Response, next: NextFunction) {
    passport.authenticate('jwt', (error, user, info) => {
        if (user) {
            return res.status(200).json({ success: true, msg: "You have logged in" });
        }
        else {
            console.log("get herer");
            return res.status(401).json({ success: false });
        }
    })(req, res, next)
}
