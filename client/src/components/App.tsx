import React from 'react';

import { BlogNew } from './BlogNew';
import { BlogEdit } from './BlogEdit';
import { BlogDetails } from './BlogDetails';
import { Home } from './Home';
import SongList from './SongList';
import { LoginButton } from './Login/LoginButton';
import { LoginForm } from './Login/LoginForm';
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
            <div>
                <LoginButton></LoginButton>
                <Router>
                    <Switch>
                        <Route path="/articles">
                            <Articles />
                        </Route>
                        <Route path="/login">
                            <LoginForm />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>

                </Router>

            </div>

            // <div>
            //     <SongList></SongList>
            // </div>
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