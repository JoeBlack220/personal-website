import React, { FormEvent, RefObject } from 'react';
import { Article } from '../interfaces/Article';
import { Redirect } from "react-router-dom";
import { BlogForm } from './BlogForm'
import axios from 'axios';
interface BlogEditProps {
    id: string
}

interface BlogEditState {
    article?: Article,
    hasError: boolean,
    redirect?: string,
    form: RefObject<BlogForm>
}
export class BlogEdit extends React.Component<BlogEditProps, BlogEditState> {
    constructor(props: BlogEditProps) {
        super(props);
        this.state = { hasError: false, form: React.createRef() };
    }
    // TODO: Need error handling methods here
    componentDidMount = async () => {
        const article: Article = (await axios.get(`http://localhost:8080/articles/edit/${this.props.id}`)).data;
        console.log("gethere");
        console.log(article);
        this.setState({ article: article });
    }
    onFormSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const curArticle = this.state.form.current?.state.article;
        if (curArticle) {
            try {
                const { status } = await axios.put(`http://localhost:8080/articles/${curArticle._id}`, curArticle);
                this.setState({ redirect: "/" });
            } catch (e) {
                this.setState({ hasError: true });
            }
        }
        else {
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
        if (this.state.article) {
            return (
                <div className="container">
                    <h1 className="mb-4">New Article</h1>
                    <form onSubmit={this.onFormSubmit}>
                        <BlogForm article={this.state.article} ref={this.state.form} />
                    </form>
                </div>
            );
        }
        return <h1>Article Not found</h1>;

    }

}