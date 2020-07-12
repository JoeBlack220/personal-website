import React from 'react';
import ReactDOM from 'react-dom';
import { Article } from '../interfaces/Article';
import axios from 'axios';

interface CardProps {
    article: Article;
}

export class ArticleCard extends React.Component<CardProps>{
    constructor(props: CardProps) {
        super(props);
    }

    deleteArticle = () => {
        axios.delete(`http://localhost:8080/articles/${this.props.article._id}`);
    }

    // use a form element to avoid google indexing clicking around with your delete button
    render() {
        return (
            <div className="card mt-4">
                <div className="card-body">
                    <h4 className="card-title">{this.props.article.title}</h4>
                    <div className="card-subtitle text-muted mb-2">
                        {this.props.article.createdAt}
                    </div>
                    <div className="card-text mb-2">{this.props.article.description}</div>
                    <a href={`/articles/${this.props.article.slug}`} className="btn btn-primary">Read More</a>
                    <a href={`/articles/edit/${this.props.article._id}`} className="btn btn-info">Edit</a>

                    <form className="d-inline">
                        <button type="submit" className="btn btn-danger" onClick={this.deleteArticle}>Delete</button>
                    </form>
                </div>
            </div>
        );
    }
}