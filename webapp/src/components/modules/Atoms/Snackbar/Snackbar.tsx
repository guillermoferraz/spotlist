import { useSelector } from 'react-redux';
/* Store */
import { RootState } from 'src/services/Store';

import { SnackbarTypes } from './Snackbar.types';

import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

/* styles */
import styles from './Snackbar.styles';

export const Snakbar = ({ open, setOpen, type, message }: SnackbarTypes) => {
  const error = type === 'error' ? true : false;
  const { theme } = useSelector((state: RootState) => state.Settings);
  const addOnTheme = { ...theme, error }
  const classes = styles(addOnTheme);


  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical :'top', horizontal: 'center' }}
        open={open}
        onClose={setOpen}
        message={message}
        key={'top' + 'vertical'}
        action={
          <IconButton>
            <CloseIcon onClick={setOpen}/>
          </IconButton>
        }
      />
    </div>
  )
};
