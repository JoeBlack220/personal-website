import mongoose, { Document } from 'mongoose';
const Schema = mongoose.Schema;
export interface user extends Document {
    username: string,
    password: string,
    email: string,
    bio: string
}

const UserSchema = new Schema<user>({
    username: String,
    password: String,
    email: String,
    bio: String
});

export const User = mongoose.model<user>('User', UserSchema);
