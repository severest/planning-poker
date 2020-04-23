import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';

import PokerApp from '../src/PokerApp.jsx';
import NoMatch from '../src/NoMatch.jsx';

import uuid from '../src/utils/uuid.js';


let userId = localStorage.getItem('planningPokerId');
if (!userId) {
    userId = uuid();
    localStorage.setItem('planningPokerId', userId);
}
window.myId = userId;


const theme = createMuiTheme({
    palette: {
        primary: lightBlue,
    },
});
ReactDOM.render((
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
            <Switch>
                <Route path="/:key" component={PokerApp} />
                <Route component={NoMatch} />
            </Switch>
        </BrowserRouter>
    </ThemeProvider>
), document.getElementById('app'));
