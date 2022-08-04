import { makeStyles } from '@mui/styles';
import { ThemeTypes } from 'src/Assets/Themes/Theme.types';

const styles = makeStyles({
    root: {
        minHeight: '70vh',
        backgroundColor: (props: ThemeTypes) => props.bgSecondary,
        margin: 15,
        borderRadius: 25
    },
    content:{
    },
    artistName:{
        color: (props: ThemeTypes) => props.colorPrimary,
        textAlign: 'center',
        letterSpacing: 2,
        paddingTop: 15,
        fontSize: '1.2rem'
    },
    conteinerImg:{
        '&>img':{
            maxWidth: '26rem',
            maxHeight: '26rem',
            margin: 15,
            borderRadius: 25
        }
    },
    containerFlex:{
        display: 'flex',
        width: '100%'
    }
});
export default styles;