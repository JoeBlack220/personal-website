import passport from 'passport';
// import GoogleStrategy from './GoogleStrategy';
import { LocalSigninStrategy } from './SigninStrategy';
import { LocalSignupStrategy } from './SignupStrategy';
// import TwitterStrategy from './'
import { User, user } from '../models/user';
import { JWTStrategy } from './JWTStrategy';
// passport.serializeUser(function (user: user, done) {
//     done(null, user.email);
// })
// passport.deserializeUser(function (email: string, done) {
//     User.findOne({ email })
//         .then((user) => {
//             done(null, user);
//         }).catch((err) => {
//             done(err, null)
//         })
// })
passport.use('local-signin', LocalSigninStrategy);
passport.use('local-signup', LocalSignupStrategy);
passport.use('jwt', JWTStrategy);

export default passport;