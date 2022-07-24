import { makeStyles } from '@mui/styles';
import { ThemeTypes } from 'src/Assets/Themes/Theme.types';

const styles = makeStyles({
  root: {
    margin: (props: ThemeTypes) => props.margin || 'auto',
    padding: (props: ThemeTypes) => props.padding || 20,
    width: (props: ThemeTypes) => props.width || '17rem'
  },
  containerInput: {
    margin: (props: ThemeTypes) => props.inputMargin || '15px 0px 15px 0px'
  },
});
export default styles;