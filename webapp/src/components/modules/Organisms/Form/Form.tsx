import { useSelector } from 'react-redux';
import { RootState } from 'src/services/Store';

/* Modules */
import { Textfield } from 'src/components/modules/Atoms/Textfield';

import { FormTypes, EntryTypes } from './Form.types';

/* Styles */
import styles from './Form.styles';

type CombineTypes = FormTypes & { entries: EntryTypes[] }

export const Form = ({ styleProps, action, onSubmit, entries, submitElement }: CombineTypes) => {
  const { theme } = useSelector((state: RootState) => state.Settings);
  const setStyles = {
    ...theme, 
    margin: styleProps?.margin, 
    width: styleProps?.width, 
    padding: styleProps?.padding,
    inputMargin: styleProps?.inputMargin
  };
  const classes = styles(setStyles);

  return (
    <div className={classes.root}>
      <form onSubmit={onSubmit} action={action || "#"}>
        {entries && entries.length > 0 && entries.map((entry, indx) => (
          <div className={classes.containerInput} key={indx}>
            <Textfield
              id={entry.id}
              name={entry.name}
              label={entry.label}
              type={entry.type}
              error={entry.error}
              helperText={entry.helperText}
              autocomplete={entry.autocomplete}
              onChange={entry.onChange}
            />
          </div>
        ))}
        {submitElement || null}
      </form>
    </div>
  )
}