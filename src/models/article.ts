import mongoose, { Document } from 'mongoose';
import marked from 'marked';
import slugify from 'slugify';
import createDomPurify from 'dompurify';
import { JSDOM } from 'jsdom';
import pinyin from 'pinyin';
const dompurify = createDomPurify(new JSDOM().window as unknown as Window);
export interface article extends Document {
    title: string,
    description: string,
    markdown: string,
    createdAt: Date,
    slug: string,
    sanitizedHtml: string
}
const articleSchema: mongoose.Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    markdown: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: () => new Date()
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    sanitizedHtml: {
        type: String,
        required: true
    }
});

articleSchema.pre<article>('validate', function (next) {
    // Handling Chinese title issue
    if (this.title) {
        let tempTitle = pinyin(this.title, {
            style: pinyin.STYLE_NORMAL
        }).join("-");
        this.slug = slugify(tempTitle, { lower: true, strict: true })
    }
    if (this.markdown) {
        this.sanitizedHtml = dompurify.sanitize(marked(this.markdown));
    }
    next();
});

export const Article = mongoose.model<article>('Article', articleSchema);
