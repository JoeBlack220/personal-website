import React, { FormEvent, RefObject } from 'react';
import { Redirect } from "react-router-dom";
import { BlogForm } from './BlogForm'
import axios from 'axios';
interface BlogNewProps {

}
interface BlogNewState {
    hasError: boolean,
    redirect?: string,
    form: RefObject<BlogForm>
}
export class BlogNew extends React.Component<BlogNewProps, BlogNewState> {
    constructor(props: BlogNewProps) {
        super(props);
        this.state = { hasError: false, form: React.createRef() };
    }
    onFormSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const curArticle = this.state.form.current?.state.article;
        try {
            const { status } = await axios.post(`http://localhost:8080/articles/`, curArticle);
            this.setState({ redirect: "/" });

        } catch (e) {
            this.setState({ hasError: true });
        }

    }
    render() {
        if (this.state.hasError) {
            return <h1>There is an error.</h1>;
        }
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className="container">
                <h1 className="mb-4">New Article</h1>
                <form onSubmit={this.onFormSubmit}>
                    <BlogForm ref={this.state.form} />
                </form>
            </div>
        );
    }

}