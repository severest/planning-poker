import React from 'react';
import PropTypes from 'prop-types';

import CropFreeRounded from '@material-ui/icons/CropFreeRounded';
import SentimentVeryDissatisfiedRounded from '@material-ui/icons/SentimentVeryDissatisfiedRounded';
import BlockRounded from '@material-ui/icons/BlockRounded';
import Filter1Rounded from '@material-ui/icons/Filter1Rounded';
import Filter2Rounded from '@material-ui/icons/Filter2Rounded';
import Filter3Rounded from '@material-ui/icons/Filter3Rounded';
import Filter5Rounded from '@material-ui/icons/Filter5Rounded';
import Filter8Rounded from '@material-ui/icons/Filter8Rounded';


const VoteIcon = ({
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
    return voteIcon
};

VoteIcon.propTypes = {
    vote: PropTypes.string,
    votesVisible: PropTypes.bool.isRequired,
};

VoteIcon.defaultProps = {
    vote: null,
};

export default VoteIcon;
