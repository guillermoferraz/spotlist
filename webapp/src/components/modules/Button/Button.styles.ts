import { makeStyles } from '@mui/styles';
import { ThemeTypes } from '../../../Assets/Themes/Theme.types';

const styles = makeStyles({
  root: {
    '&>button': {
      backgroundColor: (props: ThemeTypes) => props.colorPalletPrimary,
      color: (props: ThemeTypes) => props.colorPrimary,
      textTransform: 'capitalize',
      fontWeight: 700,
      width: '100%',
      '&:hover': {
        backgroundColor: (props: ThemeTypes) => props.bgHover,
      }
    }
  }
});
export default styles;