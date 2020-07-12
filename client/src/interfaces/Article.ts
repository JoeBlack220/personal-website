import { Document } from 'mongoose';

export interface Article {
    title: string,
    description: string,
    markdown: string,
    createdAt: string,
    slug: string,
    sanitizedHtml: string,
    _id: string
}
