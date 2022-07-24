import { makeStyles } from '@mui/styles';
import { ThemeTypes } from 'src/Assets/Themes/Theme.types';

const styles = makeStyles({
    root: {
        position: 'fixed',
        width:' 100%',
        height: '100%',
        zIndex: -1,
        backgroundColor: (props: ThemeTypes) => props.bgPrimary
    }
});
export default styles;