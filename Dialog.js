import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//   paper: {
//     background: '#eee',
//     height: 450,
//     width: 1000,
//   },
// });

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: '15px',
    borderBottom: '1px solid #e5e5e5',
    color: '#555',
  },
  closeButton: {
    position: 'absolute',
    // right: theme.spacing(1),
    // top: theme.spacing(2),
    // right: theme.palette.grey[500],
  },
});

// const DialogTitle = withStyles(styles)((props) => {
//   const { children, classes, onClose, ...other } = props;
//   <MuiDialogTitle disableTypography className={classes.root} {...other}>
//     <Typography variant="h4">{children}</Typography>
//     {onClose ? (
//       <IconButton className={classes.closeButton} onClick={onClose}>
//         <CloseIcon />
//       </IconButton>
//     ) : null}
//   </MuiDialogTitle>;
// });

// const DialogContent = withStyles((theme) => ({
//   root: {
//     margin: 0,
//     padding: '15px',
//     textAlign: 'right',
//     borderTop: '1px solid #e5e5e5',
//     color: '#555',
//   },
// }))(MuiDialogContent);

// const DialogActions = withStyles((theme) => ({
//   root: {
//     margin: 0,
//     padding: '15px',
//     textAlign: 'right',
//     borderTop: '1px solid #e5e5e5',
//     color: '#555',
//   },
// }))(MuiDialogActions);

const DialogBox = (props) => {
  const {
    dialogOpen,
    dialogTitle = '',
    children,
    confirmLabel = 'Ok',
    cancelLabel = 'Cancel',
    handleConfirm,
    handleCancel,
    isFieldRequired = false,
    isValid = true,
    maxWidth = 'md',
    fullWidth = false,
    isDisabled = false,
    ...rest
  } = props;
  // const classes = useStyles();
  const isConfirmDisabled = (isFieldRequired && !isValid) || isDisabled;
  return (
    <Dialog
      onClose={handleCancel}
      open={dialogOpen}
      maxWidth={maxWidth}
      // classes={classes}
      {...rest}
    >
      {/* <DialogTitle onClose={handleCancel}>{dialogTitle}</DialogTitle> */}
      {/* <DialogContent dividers={true}>{children}</DialogContent> */}
      {/* <DialogActions>
        <Button
          variant="contained"
          style={{
            color: '#fff',
            backgroundColor: '#b5152b',
            borderColor: '#9e1226',
          }}
        >
          {cancelLabel}
        </Button>
        <Button
          variant="contained"
          className="primary-action-btn"
          color="primary"
          onClick={handleConfirm}
          disabled={isConfirmDisabled}
        >
          {confirmLabel}
        </Button>
      </DialogActions> */}
      {children}
    </Dialog>
  );
};

export default DialogBox;
