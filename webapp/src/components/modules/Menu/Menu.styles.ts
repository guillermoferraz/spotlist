import { makeStyles } from '@mui/styles';
import { ThemeTypes } from '../../../Assets/Themes/Theme.types';

const styles = makeStyles({
  list: {
    '&>.MuiPaper-root': {
      backgroundColor: (props: ThemeTypes) => props.bgLight,
      color: (props: ThemeTypes) => props.colorPrimary,
      '&>.MuiList-root':{
        marginTop: 5,
        padding: 0, 
        '&>.MuiMenuItem-root':{
        '&:hover':{
          color: (props: ThemeTypes) => props.colorHover,
          backgroundColor: (props: ThemeTypes) => props.bgHover,
        }
      }
    },
  }
  },
  label:{
    fontSize: '0.8rem',
    margin: '0px 0px 0px 5px',
    color: (props: ThemeTypes) => props.colorHover
  },
  divider:{
    border: (props: ThemeTypes) => `1px solid ${props.bgHover}`
  }
});
export default styles;