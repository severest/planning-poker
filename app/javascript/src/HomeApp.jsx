import React from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import AppBody from './AppBody.jsx';


class HomeApp extends React.PureComponent {
    render() {
        return (
            <AppBody>
                <Box my={3} textAlign="center">
                    <Paper>
                        <Box p={3}>
                            <Typography variant="subtitle1">
                                There ain't nothing here.
                            </Typography>
                        </Box>
                    </Paper>
                </Box>
            </AppBody>
        );
    }
};

export default HomeApp;
