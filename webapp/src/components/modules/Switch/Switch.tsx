/* Styles */
import Switch from '@mui/material/Switch';
import { useSelector } from 'react-redux';

/* Store */
import { RootState } from '../../../services/Store';
import { useAppDispatch } from '../../../services/Store';
import SettingsSlice from '../../../application/Settings';


/* Styles */
import styles from './Switch.styles'

export const SwitchModule = () => {
    const dispatch = useAppDispatch();
    const { dark } = useSelector((state: RootState) => state.Settings);
    const { setTheme } = SettingsSlice.actions;
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    const handleChangeTheme = (dark) => {
        dispatch(setTheme(!dark))
    };

    return (
        <div>
            <Switch {...label} checked={!dark} onChange={() =>handleChangeTheme(dark)}/>
        </div>
    )
}