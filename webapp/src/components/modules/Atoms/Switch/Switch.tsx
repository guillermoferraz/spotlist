/* Styles */
import Switch from '@mui/material/Switch';
import { useSelector } from 'react-redux';

/* Store */
import { RootState } from 'src/services/Store';
import { SwitchTypes } from './Switch.types';

/* Styles */
import styles from './Switch.styles';

export const SwitchModule = ({LeftIcon, RightIcon, onChange, label, checked}: SwitchTypes) => {
  const { theme } = useSelector((state: RootState) => state.Settings);
  const classes = styles(theme);
  const switchLabel = { inputProps: { 'aria-label': label } };

  return (
    <div className={classes.root}>
      {LeftIcon && LeftIcon}
      <Switch {...switchLabel} checked={checked} onChange={onChange} />
      {RightIcon && RightIcon}
    </div>
  )
}