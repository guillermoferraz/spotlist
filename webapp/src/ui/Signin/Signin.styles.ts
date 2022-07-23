import { makeStyles } from '@mui/styles';
import { ThemeTypes } from '../../Assets/Themes/Theme.types';

const styles = makeStyles({
    root: {
        backgroundColor: (props: ThemeTypes) => props.bgPrimary,
        minHeight: (props: ThemeTypes) => props.minHeight,
    }
});
export default styles;