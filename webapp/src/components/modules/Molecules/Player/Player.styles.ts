import { makeStyles } from '@mui/styles';
import { ThemeTypes } from 'src/Assets/Themes/Theme.types';

const styles = makeStyles({
    root: {
        width: '70vw',
        padding: 0,
        margin: 'auto',
        marginTop: '1.5rem',
        "&>div": {
            '&>div': {
                backgroundColor: (props: ThemeTypes) => props.bgSecondary,
            },
        },
        '&>div>div>div>div>button>svg': {
            color: (props: ThemeTypes) => props.colorPalletPrimary,
        }
    },
});
export default styles;