import { RootState } from 'src/services/Store';
import { useSelector } from 'react-redux';

/* Styles */
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MenuTypes } from './Menu.types';
import styles from './Menu.styles';

export const MenuModule = ({ anchorEl, open, onClose, list }: MenuTypes) => {
  const { theme } = useSelector((state: RootState) => state.Settings);
  const classes = styles(theme);

  return (
    <Menu
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      className={classes.list}
    >
      {list && list.sections.length > 0 && (
        list.sections.map((menuItem, indx) => (
          <section key={indx}>
            <div className={classes.divider} />
            <p className={classes.label}>{menuItem.title}</p>
            <div className={classes.divider} />
            {menuItem.items && menuItem.items.length > 0 && (
              menuItem.items.map((item, indx) => (
                <MenuItem
                  key={indx}
                  onClick={item.action}
                >
                  {item.name}
                  {item.module || null}
                </MenuItem>
              ))
            )}
          </section>
        ))
      )}
    </Menu>
  )
}