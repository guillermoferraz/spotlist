import { makeStyles } from '@mui/styles';
import { ThemeTypes } from 'src/Assets/Themes/Theme.types';

const styles = makeStyles({
  root: {
    '&>div': {
      '&>div': {
        backgroundColor: (props: ThemeTypes) => props?.error ? props.errorPrimary : props.successPrimary,
        color: '#000c24',
        fontWeight: 700
      }
    }
  }
});
export default styles;