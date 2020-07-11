import React from 'react';
import ReactDOM from 'react-dom';
import { Article } from '../interfaces/Article';

interface BlogFormProps {
    article: Article;
}
export class BlogForm extends React.Component<BlogFormProps, Article> {
    constructor(props: BlogFormProps) {
        super(props);

    }
    render() {
        return (
            <div className="container">
                <h1 className="mb-4">New Article</h1>
                <form action="/articles" method="POST">
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input required value={this.state.title} type="text" name="title" id="title" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="description" className="form-control">{this.state.description}</textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="markdown">Markdown</label>
                        <textarea required name="markdown" id="markdown" className="form-control">{this.state.markdown}</textarea>
                    </div>
                    <a href="/" className="btn btn-secondary">Cancel</a>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }

}