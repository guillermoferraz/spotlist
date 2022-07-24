import { makeStyles } from '@mui/styles';
import { ThemeTypes } from 'src/Assets/Themes/Theme.types';

const styles = makeStyles({
  root: {
    backgroundColor: (props: ThemeTypes) => props.bgPrimary,
    minWidth: (props: ThemeTypes) => props.bgSecondary,
  },
  content: {
    padding: 40
  },
  title: {
    color: (props: ThemeTypes) => props.colorPrimary,
    fontSize: '1.4rem',
    margin: '20px 0px 0px 30px',
  },
  form: {
    margin: 'auto',
    padding: 20,
    width: '17rem'
  },
  containerInput: {
    margin: '15px 0px 15px 0px'
  },
  infoText:{
    color: (props: ThemeTypes) => props.colorPrimary,
    fontSize: '0.7rem',
    '&>span':{
      color: (props: ThemeTypes) => props.colorPalletPrimary,
      '&:hover':{
        color: (props: ThemeTypes) => props.bgHover,
        cursor: 'pointer'
      }
    }
  },
  containerBtn:{}
});
export default styles;