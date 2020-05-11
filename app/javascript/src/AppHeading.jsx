import React from 'react';
import Typography from '@material-ui/core/Typography';
import MapRounded from '@material-ui/icons/MapRounded';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    heading: {
        display: 'flex',
        alignItems: 'center',
        '& > svg': {
            marginRight: theme.spacing(1),
        },
        padding: theme.spacing(1),
        borderBottom: `3px solid ${theme.palette.primary.light}`,
    },
}));

const AppHeading = () => {
    const classes = useStyles();
    return (
        <Typography className={classes.heading} variant="h4" component="h1" gutterBottom>
            <MapRounded fontSize="large" />
            Planning poker
        </Typography>
    );
};

export default AppHeading;
