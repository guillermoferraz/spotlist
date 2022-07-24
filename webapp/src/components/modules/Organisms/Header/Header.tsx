import { useState } from 'react';
import { useSelector } from 'react-redux'
/* Store */
import { useNavigate } from 'react-router-dom';
/* Store */
import { RootState, useAppDispatch } from 'src/services/Store';
import SettingsSlice from 'src/application/Settings';

/* Modules */
import { MenuModule } from 'src/components/modules/Molecules/Menu';
import { SwitchModule } from '../../Atoms/Switch';

import { ListTypes } from '../../Molecules/Menu/Menu.types';

/* Styles */
import TuneIcon from '@mui/icons-material/Tune';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import LightModeIcon from '@mui/icons-material/LightMode';
import styles from './Header.styles';

export const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { dark, theme, t } = useSelector((state: RootState) => state.Settings);
  const classes = styles(theme)
  const { setTheme, setLocale } = SettingsSlice.actions;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleChangeTheme = (dark) => {
    dispatch(setTheme(!dark))
  };
  const handleChangeLng = (lng) => {
    dispatch(setLocale(lng))
  }
  const list: ListTypes =
  {
    sections: [
      {
        title: `${t.language}`,
        items: [
          {
            name: `${t.es}`,
            action: () => handleChangeLng('es'),
            module: null
          },
          {
            name: `${t.en}`,
            action: () => handleChangeLng('en'),
            module: null
          }
        ]
      },
      {
        title: `${t.theme}`,
        items: [
          {
            name: null,
            action: () => null,
            module: <SwitchModule
              checked={!dark}
              label="Switch-Theme"
              onChange={() => handleChangeTheme(dark)}
              LeftIcon={<NightsStayIcon className={classes.darkMode} />}
              RightIcon={<LightModeIcon className={classes.lightMode} />}
            />
          }
        ]
      }
    ]
  };
  
  return (
    <div className={classes.root}>
      <section className={classes.logo} onClick={() => navigate('/')}>
        <img src="img/logo.png" alt={`${t.appName}-logo`} title={t.appName} />
      </section>
      <h1 className={classes.title} onClick={() => navigate('/')} title={t.appName}>{t.appName}</h1>
      <section className={classes.iconSetting}>
        <div onClick={handleClick}>
          <TuneIcon />
        </div>
        <MenuModule
          anchorEl={anchorEl}
          open={open}
          onClose={() => setAnchorEl(null)}
          list={list}
        />
      </section>
    </div>
  )
}