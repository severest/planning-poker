import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';

import AppHeading from './AppHeading.jsx';


const AppBody = ({ children }) => {
    return (
        <Container component="main" maxWidth="sm">
            <AppHeading />
            {children}
        </Container>
    );
};

AppBody.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppBody;
