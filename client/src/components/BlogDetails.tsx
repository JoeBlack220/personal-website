import React from 'react';
import ReactDOM from 'react-dom';
import { Article } from '../interfaces/Article';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

interface BlogDetailsProps {
    slug: string
}
interface BlogDetailsState {
    article: Article
}
export class BlogDetails extends React.Component<BlogDetailsProps, BlogDetailsState> {
    
    constructor(props: BlogDetailsProps) {
        super(props);
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
    componentDidMount = async () => {
        let article = (await axios.get(`http://localhost:8080/articles/${this.props.slug}`)).data;
        this.setState({article: article});
    }
    // TODO: Change the href here to React router?
    render() {
        if (this.state.article) {
            return (
                <div className="container">
                    <h1 className="mb-1">{this.state.article.title}</h1>
                    <div className="text-muted mb-2">{this.state.article.createdAt}</div>
                    <a href="/" className="btn btn-secondary">All Articles</a>
                    <a href={`/articles/edit/${this.state.article._id}`} className="btn btn-info">Edit</a>
                    <div>
                        {ReactHtmlParser(this.state.article.sanitizedHtml)}
                    </div>

                </div>
            );
        }
        // If the slug doesn't correspond to an article
        else {
            return (
                <h1>Sorry, this article doesn't exist</h1>
            );
        }
    }
}