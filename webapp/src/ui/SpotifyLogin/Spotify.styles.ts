import { makeStyles } from '@mui/styles';
import { ThemeTypes } from 'src/Assets/Themes/Theme.types';

const styles = makeStyles({
    root: {
        backgroundColor: (props: ThemeTypes) => props.bgPrimary,
        minWidth: (props: ThemeTypes) => props.bgSecondary,
        minHeight: '89vh'
      },
      content: {
        padding: 40,
        margin: 'auto'
      },
      title: {
        color: (props: ThemeTypes) => props.colorPrimary,
        fontSize: '1.4rem',
        textAlign: 'center'
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
      split:{
        minHeight: '90vh',
        display: 'flex'
      },
      noSplit: {
      },
      container: {
        textAlign: 'center',
        '&>img':{
            maxWidth: '5rem',
            maxHeight: '5rem',
        }
      },
      text:{
        fontSize: '1rem',
        maxWidth: '20rem',
        color: (props: ThemeTypes) => props.colorPalletPrimary
      }
});
export default styles;