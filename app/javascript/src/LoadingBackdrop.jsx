import React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: theme.palette.primary,
    },
}));
const LoadingBackdrop = ({
    open,
}) => {
    const classes = useStyles();
    return (
        <Backdrop className={classes.backdrop} open={open}>
            <CircularProgress />
        </Backdrop>
    );
};

LoadingBackdrop.propTypes = {
    open: PropTypes.bool.isRequired,
};

export default LoadingBackdrop;
