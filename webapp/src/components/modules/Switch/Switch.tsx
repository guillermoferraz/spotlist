/* Styles */
import Switch from '@mui/material/Switch';
import { useSelector } from 'react-redux';

/* Store */
import { RootState } from '../../../services/Store';
import { useAppDispatch } from '../../../services/Store';
import SettingsSlice from '../../../application/Settings';

import { SwitchTypes } from './Switch.types';

export const SwitchModule = ({LeftIcon, RightIcon}: SwitchTypes) => {
  const dispatch = useAppDispatch();
  const { dark } = useSelector((state: RootState) => state.Settings);
  const { setTheme } = SettingsSlice.actions;
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const handleChangeTheme = (dark) => {
    dispatch(setTheme(!dark))
  };

  return (
    <div>
      {LeftIcon && LeftIcon}
      <Switch {...label} checked={!dark} onChange={() => handleChangeTheme(dark)} />
      {RightIcon && RightIcon}
    </div>
  )
}