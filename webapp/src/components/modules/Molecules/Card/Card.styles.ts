import { makeStyles } from '@mui/styles';
import { ThemeTypes } from 'src/Assets/Themes/Theme.types';

const styles = makeStyles({
    root: {
        maxWidth: '10rem',
        maxHeight: '10rem',
        border: '1px solid',
        borderRadius: 8,
        margin: 10,
        '&>img':{
            width: '10rem',
            height: '10rem'
        }
    }
});
export default styles;