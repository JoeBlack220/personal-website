import React from 'react';
import ReactDOM from 'react-dom';
import { Article } from '../interfaces/Article';
import { BlogForm } from './BlogForm'
import { ArticleList } from './ArticleList';
interface BlogNewProps {

}
export class BlogNew extends React.Component<BlogNewProps> {
    constructor(props: BlogNewProps) {
        super(props);

    }
    render() {
        return (
            <div className="container">
                <h1 className="mb-4">New Article</h1>
                <BlogForm />
            </div>
        );
    }

}