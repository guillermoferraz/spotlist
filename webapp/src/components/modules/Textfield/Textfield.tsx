import { useSelector } from 'react-redux';
import { RootState } from '../../../services/Store';

import { TextfieldTypes } from './Textfield.types';

/* Styles */
import TextField from '@mui/material/TextField';
import styles from './Textfield.styles';

export const Textfield = ({label, id, error, helperText,  autocomplete, type, onChange}) => {
    const { theme } = useSelector((state: RootState) => state.Settings);
    const addOnTheme = {...theme, error: error }
    const classes = styles(addOnTheme);
    return (
        <div className={classes.root}>
            <TextField
                error={error}
                id={id}
                label={label}
                helperText={error ? helperText || "" : null}
                variant="filled"
                autoComplete={autocomplete ? 'on' : 'off'}
                type={type ? type : 'text'}
                onChange={onChange || null}
            />
        </div>
    )
}