import { makeStyles } from '@mui/styles';
import { ThemeTypes } from 'src/Assets/Themes/Theme.types';

const styles = makeStyles({
  root: {
    width: '50%',
    backgroundColor: (props: ThemeTypes) => props.bgSecondary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content:{
    width: '100%'
  },
  containerLogo:{
    textAlign: 'center',
    '&>img':{
      padding: '1rem',
      maxWidth: '9rem',
      maxHeight: '9rem'
    }
  },
  title:{
    color: (props: ThemeTypes) => props.colorPalletPrimary,
    textAlign: 'center',
  }
});
export default styles;