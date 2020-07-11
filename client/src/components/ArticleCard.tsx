import React from 'react';
import ReactDOM from 'react-dom';
import { Article, fake } from '../interfaces/Article';

interface CardProps {
    article: Article;
}

export class ArticleCard extends React.Component<CardProps>{
    constructor(props: CardProps) {
        super(props);
    }
    render() {
        return (
            <div className="card mt-4">
                <div className="card-body">
                    <h4 className="card-title">{this.props.article.title}</h4>
                    <div className="card-subtitle text-muted mb-2">
                        {this.props.article.createdAt.toLocaleDateString()}
                    </div>
                    <div className="card-text mb-2">{this.props.article.description}</div>
                    <a href="articles/<%= article.slug %>" className="btn btn-primary">Read More</a>
                    <a href="articles/edit/<%= article.id %>" className="btn btn-info">Edit</a>

                    <form action="/articles/<%= article.id %>?_method=DELETE" method="POST" className="d-inline">
                        <button type="submit" className="btn btn-danger">Delete</button>
                    </form>
                </div>
            </div>
        );
    }
}