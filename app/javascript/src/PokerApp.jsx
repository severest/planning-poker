import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import AppBody from './AppBody.jsx';
import EstimateButtons from './EstimateButtons.jsx';
import { connectToPokerPlanning } from './utils/websocket.js';


const useStyles = (theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
});
class PokerApp extends React.PureComponent {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        match: PropTypes.object.isRequired,
    }

    componentDidMount() {
        connectToPokerPlanning(this.props.match.params.key);
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBody>
                    weee
                </AppBody>
                <footer className={classes.footer}>
                    <Container maxWidth="sm">
                        <EstimateButtons
                            onClick={(num) => console.log(num)}
                        />
                    </Container>
                </footer>
            </div>
        );
    }
};

export default withStyles(useStyles)(PokerApp);
