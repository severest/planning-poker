import React from 'react';
import PropTypes from 'prop-types';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


const EsitmateButtons = ({
    onClick,
}) => (
    <Box display="flex">
        <Box mr={2}>
            <ButtonGroup color="primary">
                <Button variant="contained" onClick={() => onClick('1')}>1</Button>
                <Button variant="contained" onClick={() => onClick('2')}>2</Button>
                <Button variant="contained" onClick={() => onClick('3')}>3</Button>
                <Button variant="contained" onClick={() => onClick('5')}>5</Button>
                <Button variant="contained" onClick={() => onClick('8')}>8</Button>
            </ButtonGroup>
        </Box>
        <Box mr={1}>
            <Button
                variant="contained"
                color="secondary"
                onClick={() => onClick('unknown')}
            >
                ?
            </Button>
        </Box>
        <Box>
            <Button
                variant="contained"
                onClick={() => onClick('pass')}
            >
                Pass
            </Button>
        </Box>
    </Box>
);

EsitmateButtons.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default EsitmateButtons;
