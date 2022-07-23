import { useState } from 'react';
import { useSelector } from 'react-redux'
/* Store */
import { RootState, useAppDispatch } from '../../services/Store'
import SettingsSlice from '../../application/Settings'

/* Modules */
import { MenuModule } from '../../components/modules/Menu';

/* Styles */
import TuneIcon from '@mui/icons-material/Tune';
import styles from './Header.styles'

export const Header = () => {
    const dispatch = useAppDispatch();
    const { dark, theme, t } = useSelector((state: RootState) => state.Settings);
    const classes = styles(theme)
    const { setTheme, setLocale } = SettingsSlice.actions;

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleChangeTheme = (dark) => {
        dispatch(setTheme(!dark))
    }
    const handleChangeLng = (lng) => {
        dispatch(setLocale(lng))
    }
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };

    return (
        <div className={classes.root}>
            {/* <button onClick={() => handleChangeTheme(dark)}>{dark ? 'Dark' : 'Light'}</button>
                <button onClick={() => handleChangeLng('es')}>{t.es}</button>
                <button onClick={() => handleChangeLng('en')}>{t.en}</button> */}
            <section className={classes.logo}>
                <img src="img/logo.png" alt="Spotlist logo"/>
            </section>
            <h1 className={classes.title}>Spotlist</h1>
            <section className={classes.iconSetting}>
                <div onClick={handleClick}>
                    <TuneIcon/>
                </div>
                <MenuModule 
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                />
            </section>
        </div>
    )
}