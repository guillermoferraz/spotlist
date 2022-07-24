import { makeStyles } from '@mui/styles';
import { ThemeTypes } from 'src/Assets/Themes/Theme.types';

const styles = makeStyles({
  root: {
    backgroundColor: (props: ThemeTypes) => props.bgSecondary,
    height: '5vh',
    minWidth: (props: ThemeTypes) => props.bgSecondary,
    '&>section': {
      fontSize: '0.7rem',
      display: 'flex',
      alignItems: 'center',
      color: (props: ThemeTypes) => props.colorPrimary,
      '&>:nth-child(1)':{
        marginLeft: 10
      },
      '&>:nth-child(2)':{
        color: '#0A66C2',
        marginInlineStart: 'auto',
        marginRight: 10,
        '&:hover':{
          opacity: .65,
          cursor: 'pointer'
        }
      }
    }
  }
});
export default styles;