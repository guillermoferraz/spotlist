import { makeStyles } from '@mui/styles';
import { ThemeTypes } from 'src/Assets/Themes/Theme.types';

const styles = makeStyles({
    root: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: 2,
        backgroundColor: (props: ThemeTypes) => props.backgroundLoding,
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&>div':{
            '&>span':{
                color: (props: ThemeTypes) => props.colorPalletPrimary,
            },
            color: (props: ThemeTypes) => props.colorPrimary,
            textAlign: 'center'
        }
    }
});
export default styles;