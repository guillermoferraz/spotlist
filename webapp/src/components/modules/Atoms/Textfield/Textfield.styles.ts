import { makeStyles } from '@mui/styles';
import { ThemeTypes } from 'src/Assets/Themes/Theme.types';

const styles = makeStyles({
  root: {
    width: '100%',
    '&>.MuiFormControl-root': {
      width: '100%',
      '&>.MuiInputLabel-root': {
        color: (props: ThemeTypes) => props.colorPrimary,
      },
      '&>.MuiInputLabel-root.Mui-focused': {
        color: (props: ThemeTypes) => props?.error ? 'red' : props.colorPalletPrimary
      },
      '&>.MuiFilledInput-root': {
        color: (props: ThemeTypes) => props.colorPrimary,
        backgroundColor: (props: ThemeTypes) => props.bgLight,
        '&::after': {
          borderBottom: (props: ThemeTypes) => props?.error ? '2px solid red' : '2px solid green' ,
          
        },
        '&::before': {
          borderBottom: '2px solid green',
        }
      },
      '&>.MuiFormHelperText-root':{
        fontSize: '0.65rem'
      }
    }
  }
});
export default styles;