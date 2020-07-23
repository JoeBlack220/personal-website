import { user } from '../../models/user';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export function issueJWT(user: user) {
    const _id = user._id;
    const expiresIn = '1d';
    const payload = {
        sub: _id,
        iat: Date.now()
    }
    // console.log(user);

    const signedToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET || "this is dangerous", { expiresIn: expiresIn });
    return {
        token: "Bearer " + signedToken,
        expires: expiresIn
    }
}

