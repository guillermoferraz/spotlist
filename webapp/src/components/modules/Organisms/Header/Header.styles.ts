import { makeStyles } from '@mui/styles';
import { ThemeTypes } from 'src/Assets/Themes/Theme.types';

const styles = makeStyles({
  root: {
    backgroundColor: (props: ThemeTypes) => props.bgSecondary,
    display: 'flex',
    height: '5vh',
    alignItems: 'center',
    minWidth: (props: ThemeTypes) => props.minWidth,
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
    },
    '&:hover':{
      cursor: 'pointer'
    }
  },
  title:{
    color: (props: ThemeTypes) => props.colorPalletPrimary,
    fontSize: '0.9rem',
    marginLeft: 10,
    '&:hover':{
      cursor: 'pointer'
    }
  },
  darkMode: {
    color: (props: ThemeTypes) => props.darkMode
  },
  lightMode: {
    color: (props: ThemeTypes) => props.lightMode
  },
  logout: {
    color:(props: ThemeTypes) => props.colorPrimary,
    marginInlineStart: 'auto',
    paddingLeft: 5,
    '&:hover':{
      color:(props: ThemeTypes) => props.colorPalletPrimary,
    }
  }
});
export default styles;