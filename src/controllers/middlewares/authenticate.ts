import { Response, NextFunction, Request } from 'express';
import passport from '../../passport';
export function authenticate(method: string) {
    return async (req: Request, res: Response, next: NextFunction) => {
        passport.authenticate(method, (error, user, info) => {
            if (error) {
                return res.status(500).json({
                    message: error || "Ooops, something happened",
                    error: error.message || "Inter server error"
                });
            }
            req.logIn(user, (error) => {
                if (error) {
                    console.log(error);
                    return res.status(500).json({
                        message: error || "Ooops, something happend"
                    });
                }

            });
            // we can add data to the session here
            user.isAuthenticated = true;
            return res.json(user);
        })(req, res, next)
    }
}