import React from 'react';
import ReactDOM from 'react-dom';
import { Article, fake } from '../interfaces/Article';

interface BlogDetailsInterface {
    article: Article;
}
export class BlogDetails extends React.Component<BlogDetailsInterface> {
    constructor(props: BlogDetailsInterface) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <h1 className="mb-1">{this.props.article.title}</h1>
                <div className="text-muted mb-2">{this.props.article.createdAt.toLocaleDateString()}</div>
                <a href="/" className="btn btn-secondary">All Articles</a>
                <a href={`/articles/edit/${this.props.article.id}`} className="btn btn-info">Edit</a>
                <div>
                    {this.props.article.sanitizedHtml}
                </div>

            </div>
        );
    }
}