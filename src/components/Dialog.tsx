import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

function AlertDialog({ open, handleClose }: any) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{'Message sent successfully!'}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} href='http://localhost:3000/' color='success'>
            HOME PAGE
          </Button>
          <Button onClick={handleClose} color='error' autoFocus>
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AlertDialog;
