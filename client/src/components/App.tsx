import React from 'react';

import { BlogNew } from './BlogNew';
import { BlogEdit } from './BlogEdit';
import { BlogDetails } from './BlogDetails';
import { Home } from './Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
    useParams
} from "react-router-dom";

export class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/articles">
                        <Articles />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>

            </Router>
        );
    }
}
function Articles() {
    let match = useRouteMatch();
    return (
        <Switch>
            <Route path={`${match.path}/new`}>
                <BlogNew />
            </Route>
            <Route path={`${match.path}/edit/:id`}>
                <Edit />
            </Route>
            <Route path={`${match.path}/:slug`}>
                <Details />
            </Route>
            <Route path={match.path}>
                <h3>Please specify a slug.</h3>
            </Route>
        </Switch>
    );
}

function Edit() {
    let { id } = useParams();
    return (<BlogEdit id={id} />)
}

function Details() {
    let { slug } = useParams();
    return (<BlogDetails slug={slug} />)
}