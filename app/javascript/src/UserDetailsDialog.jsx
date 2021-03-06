import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const UserDetailsDialog = ({
    open,
    onSubmit,
}) => {
    const [
        name,
        setName
    ] = useState('');
    return (
        <Dialog open={open}>
            <form onSubmit={(e) => {
                e.preventDefault();
                onSubmit({ name, spectator: false });
            }}>
                <DialogTitle>Enter name</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To join the planning session, enter your name.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        label="Name"
                        name="Name"
                        type="text"
                        fullWidth
                        onChange={(evt) => setName(evt.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => onSubmit({ spectator: true })}>
                        Spectate
                    </Button>
                    <Button type="submit" color="primary">
                        Join
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

UserDetailsDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default UserDetailsDialog;
