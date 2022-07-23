import { RootState } from '../../../services/Store';
import { useSelector } from 'react-redux';

/* Modlues */
import { SwitchModule } from '../Switch';

/* Styles */
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MenuTypes } from './Menu.types';
import styles from './Menu.styles';

export const MenuModule = ({ anchorEl, open, onClose }: MenuTypes) => {

  const { t, theme } = useSelector((state: RootState) => state.Settings);
  const classes = styles(theme);

  return (
    <Menu
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      className={classes.list}
    >
      <div className={classes.divider} />
      <p className={classes.label}>Idioma</p>
      <div className={classes.divider} />
      <MenuItem
        onClick={() => onClose()}
      >
        Espanol
      </MenuItem>
      <MenuItem
        onClick={() => onClose()}
      >
        Ingles
      </MenuItem>
      <div className={classes.divider} />
      <p className={classes.label}>Tema</p>
      <div className={classes.divider} />
      <MenuItem
      >
        <SwitchModule/>
      </MenuItem>
    </Menu>
  )
}