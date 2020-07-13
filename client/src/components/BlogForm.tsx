import React from 'react';
import { Article } from '../interfaces/Article';

interface BlogFormProps {
    article?: Article,
}
interface BlogFormState {
    article: Article,
}
export class BlogForm extends React.Component<BlogFormProps, BlogFormState> {
    constructor(props: BlogFormProps) {
        super(props);
        if (this.props.article) {
            this.state = { article: this.props.article };
        }
        else {
            let article = {
                title: "",
                description: "",
                markdown: "",
                createdAt: "",
                slug: "",
                sanitizedHtml: "",
                _id: ""
            }

            this.state = { article: article };
        }
    }

    render() {
        if (this.state.article) {
            return (
                <React.Fragment>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            required
                            value={this.state.article.title}
                            onChange={e => this.setState({ article: { ...this.state.article, title: e.target.value } })}
                            type="text"
                            name="title"
                            id="title"
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            name="description"
                            id="description"
                            value={this.state.article.description}
                            onChange={e => this.setState({ article: { ...this.state.article, description: e.target.value } })}
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="markdown">Markdown</label>
                        <textarea
                            required
                            name="markdown"
                            id="markdown"
                            value={this.state.article.markdown}
                            onChange={e => this.setState({ article: { ...this.state.article, markdown: e.target.value } })}
                            className="form-control" />
                    </div>
                    <a href="/" className="btn btn-secondary">Cancel</a>
                    <button type="submit" className="btn btn-primary">Save</button>
                </React.Fragment>
            );
        }
        return <h1>Error!</h1>;

    }

}