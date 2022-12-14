import { useSelector } from 'react-redux';
import { RootState } from 'src/services/Store';

import { TextfieldTypes } from './Textfield.types';

/* Styles */
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';


import styles from './Textfield.styles';

export const Textfield = ({ label, id, error, helperText, autocomplete, type, onChange, name, icon, value }: TextfieldTypes) => {
  const { theme } = useSelector((state: RootState) => state.Settings);
  const addOnTheme = { ...theme, error: error }
  const classes = styles(addOnTheme);


  return (
    <div className={classes.root}>
      <TextField
        error={error}
        name={name}
        id={id}
        label={label}
        helperText={error ? helperText || "" : null}
        variant="filled"
        autoComplete={autocomplete ? 'on' : 'off'}
        type={type ? type : 'text'}
        onChange={onChange}
        value={value}
        InputProps={{
          endAdornment: <InputAdornment position="end">{icon && <IconButton>{icon}</IconButton>}</InputAdornment>
        }}
      />
    </div>
  )
}