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


const iconClasses = {
    '1': Filter1Rounded,
    '2': Filter2Rounded,
    '3': Filter3Rounded,
    '5': Filter5Rounded,
    '8': Filter8Rounded,
    'unknown': SentimentVeryDissatisfiedRounded,
    'pass': BlockRounded,
};

const VoteIcon = ({
    vote,
    votesVisible,
}) => {
    let voteIcon = <CropFreeRounded fontSize="large" />;
    if (votesVisible && iconClasses[vote]) {
        const IconClass = iconClasses[vote];
        voteIcon = <IconClass fontSize="large" />;
    }
    return voteIcon;
};

VoteIcon.propTypes = {
    vote: PropTypes.string,
    votesVisible: PropTypes.bool.isRequired,
};

VoteIcon.defaultProps = {
    vote: null,
};

export default VoteIcon;
