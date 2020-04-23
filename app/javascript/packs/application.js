import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import PokerApp from '../src/PokerApp.jsx';
import NoMatch from '../src/NoMatch.jsx';

ReactDOM.render((
    <>
        <CssBaseline />
        <BrowserRouter>
            <Switch>
                <Route path="/:key" component={PokerApp} />
                <Route component={NoMatch} />
            </Switch>
        </BrowserRouter>
    </>
), document.getElementById('app'));
