import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import PersonRounded from '@material-ui/icons/PersonRounded';
import CropFreeRounded from '@material-ui/icons/CropFreeRounded';
import SentimentVeryDissatisfiedRounded from '@material-ui/icons/SentimentVeryDissatisfiedRounded';
import BlockRounded from '@material-ui/icons/BlockRounded';
import Filter1Rounded from '@material-ui/icons/Filter1Rounded';
import Filter2Rounded from '@material-ui/icons/Filter2Rounded';
import Filter3Rounded from '@material-ui/icons/Filter3Rounded';
import Filter5Rounded from '@material-ui/icons/Filter5Rounded';
import Filter8Rounded from '@material-ui/icons/Filter8Rounded';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { votesVisibleSelector } from './redux/selectors/poker-planning-session.js';


const StyledBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}))(Badge);

const Participant = ({
    user,
    vote,
    votesVisible,
}) => {
    let voteIcon = <CropFreeRounded fontSize="large" />;
    if (votesVisible) {
        if (vote === '1') {
            voteIcon = <Filter1Rounded fontSize="large" />;
        } else if (vote === '2') {
            voteIcon = <Filter2Rounded fontSize="large" />;
        } else if (vote === '3') {
            voteIcon = <Filter3Rounded fontSize="large" />;
        } else if (vote === '5') {
            voteIcon = <Filter5Rounded fontSize="large" />;
        } else if (vote === '8') {
            voteIcon = <Filter8Rounded fontSize="large" />;
        } else if (vote === 'unknown') {
            voteIcon = <SentimentVeryDissatisfiedRounded fontSize="large" />;
        } else if (vote === 'pass') {
            voteIcon = <BlockRounded fontSize="large" />;
        }
    }
    return (
        <Box my={3} display="flex" alignItems="center" justifyContent="space-between">
            <Box display="flex" alignItems="center">
                <StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    variant="dot"
                >
                    <Avatar>
                        <PersonRounded />
                    </Avatar>
                </StyledBadge>
                <Box ml={2}>
                    <Typography variant="body1">{user.name}</Typography>
                </Box>
            </Box>
            <Badge color="primary" variant="dot" invisible={vote === null || votesVisible}>
                {voteIcon}
            </Badge>
        </Box>
    );
};

Participant.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }),
    vote: PropTypes.string,
    votesVisible: PropTypes.bool.isRequired,
};

Participant.defaultProps = {
    vote: null,
}

const mapStateToProps = (state) => {
    return {
        votesVisible: votesVisibleSelector(state),
    };
};

export default connect(mapStateToProps, null)(Participant);
