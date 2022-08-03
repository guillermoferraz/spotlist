import { makeStyles } from '@mui/styles';
import { ThemeTypes } from 'src/Assets/Themes/Theme.types';

const styles = makeStyles({
    root: {
        maxWidth: '10rem',
        maxHeight: '10rem',
        borderRadius: 20,
        margin: 'auto',
        '&>img':{
            width: '10rem',
            height: '10rem',
            borderRadius: 20,
        },
        '&:hover':{
            cursor: 'pointer',
            border: (props: ThemeTypes) => `1px solid  ${props.colorPalletPrimary}`,
            boxShadow: (props: ThemeTypes) => `0px 3px 16px ${props.colorPalletPrimary}`
        }
    }
});
export default styles;