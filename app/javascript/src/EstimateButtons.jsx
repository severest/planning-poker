import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import {
    submitVote,
    showVotes,
    hideVotes,
} from './utils/websocket.js';


const EsitmateButtons = ({
    onHideVotes,
    onSubmitVote,
    onShowVotes,
}) => (
    <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
            <Box mr={1}>
                <ButtonGroup color="primary">
                    <Button variant="contained" onClick={() => onSubmitVote('1')}>1</Button>
                    <Button variant="contained" onClick={() => onSubmitVote('2')}>2</Button>
                    <Button variant="contained" onClick={() => onSubmitVote('3')}>3</Button>
                    <Button variant="contained" onClick={() => onSubmitVote('5')}>5</Button>
                    <Button variant="contained" onClick={() => onSubmitVote('8')}>8</Button>
                </ButtonGroup>
            </Box>
            <Box mr={1}>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => onSubmitVote('unknown')}
                >
                    ?
                </Button>
            </Box>
            <Box>
                <Button
                    variant="contained"
                    onClick={() => onSubmitVote('pass')}
                >
                    Pass
                </Button>
            </Box>
        </Box>
        <Box>
            <ButtonGroup>
                <Button variant="contained" onClick={onHideVotes}>Reset</Button>
                <Button variant="contained" onClick={onShowVotes}>Show</Button>
            </ButtonGroup>
        </Box>
    </Box>
);

EsitmateButtons.propTypes = {
    onHideVotes: PropTypes.func.isRequired,
    onSubmitVote: PropTypes.func.isRequired,
    onShowVotes: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
    return {
        onHideVotes: () => {
            hideVotes();
        },
        onSubmitVote: (vote) => {
            submitVote(vote);
        },
        onShowVotes: () => {
            showVotes();
        },
    };
};

export default connect(null, mapDispatchToProps)(EsitmateButtons);
