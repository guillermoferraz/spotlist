import { RootState } from '../../../services/Store';
import { useSelector } from 'react-redux';

/* Modlues */
import { SwitchModule } from '../Switch';

/* Store */
import SettingsSlice from '../../../application/Settings';
import { useAppDispatch } from '../../../services/Store';

/* Styles */
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MenuTypes } from './Menu.types';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import LightModeIcon from '@mui/icons-material/LightMode';
import styles from './Menu.styles';

export const MenuModule = ({ anchorEl, open, onClose }: MenuTypes) => {
  const dispatch = useAppDispatch();
  const { t, theme } = useSelector((state: RootState) => state.Settings);
  const { setLocale } = SettingsSlice.actions;

  const classes = styles(theme);

  const handleChangeLng = (lng) => {
    dispatch(setLocale(lng))
  }

  return (
    <Menu
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      className={classes.list}
    >
      <div className={classes.divider} />
      <p className={classes.label}>{t.language}</p>
      <div className={classes.divider} />
      <MenuItem
        onClick={() => handleChangeLng('es')}
      >
        {t.es}
      </MenuItem>
      <MenuItem
        onClick={() => handleChangeLng('en')}
      >
        {t.en}
      </MenuItem>
      <div className={classes.divider} />
      <p className={classes.label}>{t.theme}</p>
      <div className={classes.divider} />
      <MenuItem
      >
        <div className={classes.switch}>
          <SwitchModule
            LeftIcon={<NightsStayIcon className={classes.darkMode} />}
            RightIcon={<LightModeIcon className={classes.lightMode} />}
          />
        </div>
      </MenuItem>
    </Menu>
  )
}