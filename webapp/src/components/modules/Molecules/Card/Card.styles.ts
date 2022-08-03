import { makeStyles } from '@mui/styles';
import { ThemeTypes } from 'src/Assets/Themes/Theme.types';

const styles = makeStyles({
    root: {
        maxWidth: '12rem',
        maxHeight: '12rem',
        borderRadius: 20,
        margin: 'auto',
        textAlign: 'center',
        '&>img':{
            width: '10rem',
            height: '10rem',
            borderRadius: 20,
            '&:hover':{
                cursor: 'pointer',
                border: (props: ThemeTypes) => `1px solid  ${props.colorPalletPrimary}`,
                boxShadow: (props: ThemeTypes) => `0px 3px 16px ${props.colorPalletPrimary}`
            },
        },
        '&>p':{
            fontSize: '0.8rem',
            margin: 0,
            color: (props: ThemeTypes) => props.colorPrimary,
            fontWeight: 700
        }
    }
});
export default styles;