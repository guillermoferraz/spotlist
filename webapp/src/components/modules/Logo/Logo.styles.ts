import { makeStyles } from '@mui/styles';
import { ThemeTypes } from '../../../Assets/Themes/Theme.types';

const styles = makeStyles({
    root: {
        
        textAlign: 'center',
        padding: 20,
        width: '6rem',
        height: '6rem',
        borderRadius: '50%',
        margin: 'auto',
        backgroundColor: (props: ThemeTypes) => props.bgSecondary,
        '&>img':{
            width: '100%',
            height: '100%'
        }
    }
});
export default styles;