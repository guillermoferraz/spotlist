import { makeStyles } from '@mui/styles';
import { ThemeTypes } from '../../Assets/Themes/Theme.types';

const styles = makeStyles({
  root: {
    backgroundColor: (props: ThemeTypes) => props.bgSecondary,
    display: 'flex',
    height: '5vh',
    alignItems: 'center',
  },
  iconSetting: {
    color: (props: ThemeTypes) => props.colorPrimary,
    width: 'max-content',
    height: 'max-content',
    marginInlineStart: 'auto',
    marginRight: 10,
    '&:hover': {
      color: (props: ThemeTypes) => props.colorHover,
      cursor: 'pointer'
    }
  },
  logo: {
    width: '1.6rem',
    height: '1.6rem',
    marginLeft: 15,
    '&>img':{
      width: '100%',
      height: '100%'
    }
  },
  title:{
    color: (props: ThemeTypes) => props.colorPalletPrimary,
    fontSize: '0.9rem',
    marginLeft: 10
  }
});
export default styles;