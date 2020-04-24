import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import AppBody from './AppBody.jsx';
import LoadingBackdrop from './LoadingBackdrop.jsx';
import EstimateButtons from './EstimateButtons.jsx';
import UserDetailsDialog from './UserDetailsDialog.jsx';
import Participant from './Participant.jsx';
import {
    connectToPokerPlanning,
    joinSession,
} from './utils/websocket.js';
import {
    currentUserSelector,
    namedUserSelector,
} from './redux/selectors/poker-planning-session.js';


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
        currentUser: PropTypes.shape({
            user: PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string,
            }).isRequired,
            vote: PropTypes.string,
        }),
        match: PropTypes.object.isRequired,
        onConnectToSession: PropTypes.func.isRequired,
        onJoinSession: PropTypes.func.isRequired,
    }

    static defaultProps = {
        currentUser: null,
    }

    componentDidMount() {
        this.props.onConnectToSession(this.props.match.params.key);
    }

    render() {
        const {
            classes,
            currentUser,
            participants,
            onJoinSession,
        } = this.props;
        return (
            <>
                <LoadingBackdrop open={!currentUser} />
                <UserDetailsDialog open={currentUser !== null && !currentUser.user.name} onSubmit={onJoinSession} />
                <div className={classes.root}>
                    <AppBody>
                        <Box my={3}>
                            <Paper>
                                <Box p={3}>
                                    {participants.map((participant) => (
                                        <Participant key={participant.user.id} {...participant} />
                                    ))}
                                </Box>
                            </Paper>
                        </Box>
                    </AppBody>
                    <footer className={classes.footer}>
                        <Container maxWidth="sm">
                            <EstimateButtons />
                        </Container>
                    </footer>
                </div>
            </>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        currentUser: currentUserSelector(state),
        participants: namedUserSelector(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onConnectToSession: (sessionId) => {
            connectToPokerPlanning(sessionId, dispatch);
        },
        onJoinSession: (user) => {
            joinSession(user);
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(PokerApp));
