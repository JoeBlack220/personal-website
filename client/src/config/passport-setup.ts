import passport from 'passport';
import GoogleOauth from 'passport-google-oauth20';
const cred = "1034912148193-9osvgugbh8f3b2dkurelsc3u9vh9t69b.apps.googleusercontent.com";

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRETE = process.env.CLIENT_SECRETE;
if (CLIENT_ID && CLIENT_SECRETE) {
    passport.use(new GoogleOauth.Strategy({
        clientID: CLIENT_ID,
        clientSecret: CLIENT_SECRETE,
        callbackURL: "/auth/google/callback"
    },
        () => { }
    ));
}

