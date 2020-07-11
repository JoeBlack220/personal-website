import React from 'react';
import ReactDOM from 'react-dom';
import { ArticleCard } from './components/ArticleCard';
import { BlogForm } from './components/BlogForm';
import { BlogDetails } from './components/BlogDetails';
class App extends React.Component {
    render() {
        return <div>Hello</div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);