import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import AppHeading from './AppHeading.jsx';
import EstimateButtons from './EstimateButtons.jsx';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
}));
const PokerApp = ({}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container component="main" className={classes.main} maxWidth="sm">
                <AppHeading />

                <Typography variant="body1">Sticky foolter</Typography>
            </Container>
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <EstimateButtons
                        onClick={(num) => console.log(num)}
                    />
                </Container>
            </footer>
        </div>
    );
};

PokerApp.propTypes = {

};

export default PokerApp;
