import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home/Home';
import Auth from './Auth/Auth';
import User from './User';

function Index() {
    return (
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Auth} />
                <Route path="/add-user" component={Auth} />

            </Switch>
        </BrowserRouter>
    );
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}
