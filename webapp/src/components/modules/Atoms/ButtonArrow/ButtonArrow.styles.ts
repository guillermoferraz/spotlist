import { makeStyles } from '@mui/styles';
import { ThemeTypes } from 'src/Assets/Themes/Theme.types';

const styles = makeStyles({
    root: {
        margin: 10,
        display: 'flex',
        justifyContent: 'end',
        color: (props: ThemeTypes) => props.colorPalletPrimary,
        alignItems: 'center',
        "&>svg": {
            borderRadius: '50%',
            fontWeight: 900,
            width: '2rem',
            height: '2rem',
            color: (props: ThemeTypes) => props.bgSecondary,
            border: (props: ThemeTypes) => `1px solid ${props.colorPalletPrimary}`,
            backgroundColor: (props: ThemeTypes) => props.colorPalletPrimary,
            "&:hover": {
                backgroundColor: (props: ThemeTypes) => props.bgHover,
                cursor: 'pointer',
            },
        },
        '&>span':{
            marginLeft: 10
        }
    }
});
export default styles;