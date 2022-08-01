import { makeStyles } from '@mui/styles';
import { ThemeTypes } from 'src/Assets/Themes/Theme.types';

const styles = makeStyles({
  root: {
    backgroundColor: (props: ThemeTypes) => props.bgSecondary,
    width: '30vw',
    marginInlineStart: 'auto',
    minHeight: '90vh',
    margin: 0,
    padding: 0
  },
  containerSearch :{
    padding: 20
  },
  icon :{
    maxWidth: '1.5rem',
    maxHeight: '1.5rem'
  }
});
export default styles;