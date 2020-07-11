import { Document } from 'mongoose';

export interface Article extends Document {
    title: string,
    description: string,
    markdown: string,
    createdAt: Date,
    slug: string,
    sanitizedHtml: string,
}
