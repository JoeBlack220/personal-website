import local from 'passport-local'
import { User } from '../models/user';
import bcrypt from 'bcrypt';
// TODO: set this to environmental variable
const salt = bcrypt.genSaltSync(10);

const strategy = local.Strategy;

export const LocalSigninStrategy = new strategy({ usernameField: 'email' },
    (email, password, done) => {
        User.findOne({ email }).lean().exec((err, user) => {
            if (err) {
                return done(err, null);
            }
            if (!user) {
                return done("No user found", null);
            }

            const isPasswordCorrect = bcrypt.compareSync(password, user.password);
            if (!isPasswordCorrect) {
                return done("Email doesn't match with password");
            }
            return done(null, user);

        })
    }
);