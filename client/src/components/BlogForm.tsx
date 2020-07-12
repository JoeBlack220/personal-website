import React, { FormEvent } from 'react';
import ReactDOM from 'react-dom';
import { Article } from '../interfaces/Article';
import { Redirect } from "react-router-dom";

import axios from 'axios';
interface BlogFormProps {
    article?: Article,
    isEdit?: boolean,
}
interface BlogFormState {
    article: Article,
    hasError: boolean,
    redirect?: string
}
export class BlogForm extends React.Component<BlogFormProps, BlogFormState> {
    constructor(props: BlogFormProps) {
        super(props);
        if (this.props.article) {
            this.state = { article: this.props.article, hasError: false };
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

            this.state = { article: article, hasError: false };
        }
    }
    onFormSubmit = async (event: FormEvent) => {
        event.preventDefault();
        // TODO: Fix this adhoc error handling
        if (this.props.isEdit) {
            // TODO: Fix this adhoc error handling
            try {
                const { status } = await axios.put(`http://localhost:8080/articles/${this.state.article._id}`, this.state.article);
                this.setState({ redirect: "/" });
            } catch (e) {
                this.setState({ hasError: true });
            }
        }
        else {
            // TODO: Fix this adhoc error handling
            try {
                const { status } = await axios.post(`http://localhost:8080/articles/`, this.state.article);
                this.setState({ redirect: "/" });

            } catch (e) {
                this.setState({ hasError: true });
            }
        }
    }
    render() {
        if (this.state.hasError) {
            return <h1>Can't do that</h1>;
        }
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        if (this.state.article) {
            return (
                <form onSubmit={this.onFormSubmit}>
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
                </form>
            );
        }
        return <h1>Error!</h1>;

    }

}