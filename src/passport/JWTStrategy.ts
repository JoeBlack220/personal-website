import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from '../models/user';
import dotenv from 'dotenv';
dotenv.config();

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.ACCESS_TOKEN_SECRET || "this is dangerous"
}

export const JWTStrategy = new Strategy(options, (payload, done) => {
    User.findOne({ _id: payload.sub })
        .then((user) => {
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        }).catch(err => done(err, null));
});