import React from 'react';
import { Article } from '../interfaces/Article';
import { ArticleCard } from './ArticleCard';
interface ArticleListProps {
    allArticles: Article[];
}

export class ArticleList extends React.Component<ArticleListProps>{
    constructor(props: ArticleListProps) {
        super(props);
    }
    render() {
        const articles = this.props.allArticles.map((article) => {
            return <ArticleCard key={article.slug} article={article} />
        });

        return <div>{articles}</div>;
    }
}