import mongoose, { Document } from 'mongoose';
import marked from 'marked';
import slugify from 'slugify';
export interface article extends Document {
    title: string,
    description: string,
    markdown: string,
    createdAt: Date,
    slug: string
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
    // slug: {
    //     type: String,
    //     required: true,
    //     unique: true
    // }
});

// articleSchema.pre<article>('validate', function (next) {
//     if (this.title) {
//         this.slug = slugify(this.title, { lower: true, strict: true })
//     }
// });

export const Article = mongoose.model('Article', articleSchema);
