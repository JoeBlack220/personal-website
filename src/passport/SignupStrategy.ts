import local from 'passport-local';
import { User } from '../models/user';
import bcrypt from 'bcrypt';
// TODO: set this to global variable
const salt = bcrypt.genSaltSync(10);
const strategy = local.Strategy;

export const LocalSignupStrategy = new strategy({ passReqToCallback: true },
    (req, username, password, done) => {
        const email = req.body.email;
        const bio = req.body.bio;
        User.findOne({ email }).lean().exec((err, user) => {
            if (err) {
                return done(err, null);
            }
            if (user) {
                return done("User already exists", null);
            }
            const encryptedPassword = bcrypt.hashSync(password, salt)
            let newUser = new User({
                email,
                password: encryptedPassword,
                username,
                bio
            });
            newUser.save((error, inserted) => {
                if (error) {
                    return done(error);
                }
                return done(null, inserted);
            });
        });
    }
);