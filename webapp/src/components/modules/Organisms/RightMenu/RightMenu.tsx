import { useSelector } from 'react-redux';
/* Store */
import { RootState } from 'src/services/Store';

/* Modules */
import { Textfield } from '../../Atoms/Textfield';
import { Player } from 'src/components/modules/Molecules/Player';
import { ListItemModule } from '../../Molecules/ListItem';

/* Styles */
import SearchIcon from '@mui/icons-material/Search';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import styles from './RightMenu.styles';

export const RightMenu = ({ search, setSearch, handleSearch, onKeyPress }) => {
  const mediaQueryTheme = useTheme();
  const mobile = useMediaQuery(mediaQueryTheme.breakpoints.down('sm'))
  const { theme } = useSelector((state: RootState) => state.Settings);
  const classes = styles(theme);

  return (
    <div className={classes.root} tabIndex={0}>
      <div className={classes.containerSearch} onKeyDown={onKeyPress}>
      <Textfield
        label='Search'
        id="search-input-01"
        name="search"
        error={false}
        helperText=""
        autocomplete={false}
        type="text"
        onChange={(event) => setSearch(event.currentTarget.value)}
        icon={<SearchIcon className={classes.icon} onClick={() => handleSearch()}/>}
      />
      </div>
      <ListItemModule/>
    </div>
  )
}