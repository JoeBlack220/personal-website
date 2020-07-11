import React from 'react';
import ReactDOM from 'react-dom';
import { ArticleCard } from './components/ArticleCard';
import { fake } from './interfaces/Article';
import { BlogForm } from './components/BlogForm';
import { BlogDetails } from './components/BlogDetails';
class App extends React.Component {
    render() {
        return <BlogDetails article={fake} />;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);