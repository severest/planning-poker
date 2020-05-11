import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../src/redux/reducer.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';

import HomeApp from '../src/HomeApp.jsx';
import PokerApp from '../src/PokerApp.jsx';
import NoMatch from '../src/NoMatch.jsx';

import uuid from '../src/utils/uuid.js';


let userId = uuid();
window.myId = userId;

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && !PRODUCTION && window.__REDUX_DEVTOOLS_EXTENSION__());

const theme = createMuiTheme({
    palette: {
        primary: lightBlue,
    },
});

ReactDOM.render((
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={HomeApp} />
                    <Route path="/:key" component={PokerApp} />
                    <Route component={NoMatch} />
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    </Provider>
), document.getElementById('app'));
