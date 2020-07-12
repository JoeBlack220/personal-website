import React from 'react';
import ReactDOM from 'react-dom';
import { Article } from '../interfaces/Article';
import axios from 'axios';
import { ArticleList } from './ArticleList';
interface HomeProps {

}
interface HomeState {
    allArticles: Article[]
}

export class Home extends React.Component<HomeProps, HomeState>{
    constructor(props: HomeProps) {
        super(props);
        this.state = {
            allArticles: []
        }
    }
    render() {
        return (
            <div className="container">
                <h1 className="mb-4">Blog Articles</h1>
                <a href="/articles/new" className="btn btn-success">New Article</a>
                <ArticleList allArticles={this.state.allArticles} />
            </div>
        );
    }
    // Retrieve all the blogs
    async componentDidMount() {
        const articles: Article[] = (await axios.get('http://localhost:8080/')).data;
        this.setState({ allArticles: articles });
        console.log(this.state.allArticles);
    }
}