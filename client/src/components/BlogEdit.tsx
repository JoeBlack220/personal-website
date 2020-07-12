import React from 'react';
import ReactDOM from 'react-dom';
import { Article } from '../interfaces/Article';
import { BlogForm } from './BlogForm'
import { ArticleList } from './ArticleList';
import axios from 'axios';
interface BlogEditProps {
    id: string
}

interface BlogEditState {
    article?: Article
}
export class BlogEdit extends React.Component<BlogEditProps, BlogEditState> {
    constructor(props: BlogEditProps) {
        super(props);
        this.state = {};
    }
    // TODO: Need error handling methods here
    componentDidMount = async () => {
        const article: Article = (await axios.get(`http://localhost:8080/articles/edit/${this.props.id}`)).data;
        console.log("gethere");
        console.log(article);
        this.setState({ article: article });
    }
    render() {
        if (this.state.article) {
            return (
                <div className="container">
                    <h1 className="mb-4">New Article</h1>
                    <BlogForm isEdit={true} article={this.state.article} />
                </div>
            );
        }
        else {
            return <h1>Article Not found</h1>;
        }
    }

}