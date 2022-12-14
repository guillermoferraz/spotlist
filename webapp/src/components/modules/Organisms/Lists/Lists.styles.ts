import { makeStyles } from '@mui/styles';
import { ThemeTypes } from 'src/Assets/Themes/Theme.types';

const styles = makeStyles({
    root: {
        display: 'flex',
    },
    dontPlayLists:{
        color: (props: ThemeTypes) => props.colorPalletPrimary,
        fontSize: '0.8rem',
        textAlign: 'center'
    },
    containerLeft: {
        width: '20rem',
        marginLeft: 20,
        minHeight: '70vh',
        padding: 10,
        border: (props: ThemeTypes) => `1px solid ${props.colorPalletPrimary}`,
        borderRadius: 15,
        backgroundColor: (props: ThemeTypes) => props.bgSecondary,

    },
    containerRight:{
        border: (props: ThemeTypes) => `1px solid ${props.colorPalletPrimary}`,
        borderRadius: 15,
        backgroundColor: (props: ThemeTypes) => props.bgSecondary,
        width: '90%',
        margin: '0px 20px 0px 20px',
        minHeight: '70vh',
        padding: 10
    },
    rootMobile: {
    },
    dontPlayListsMobile:{
        color: (props: ThemeTypes) => props.colorPalletPrimary,
        fontSize: '0.8rem',
        textAlign: 'center'
    },
    containerLeftMobile: {
        width: '92vw',
        padding: 10,
        margin: 'auto',
        border: (props: ThemeTypes) => `1px solid ${props.colorPalletPrimary}`,
        borderRadius: 15,
        backgroundColor: (props: ThemeTypes) => props.bgSecondary,

    },
    containerRightMobile:{
        border: (props: ThemeTypes) => `1px solid ${props.colorPalletPrimary}`,
        borderRadius: 15,
        backgroundColor: (props: ThemeTypes) => props.bgSecondary,
        width: '92vw',
        margin: 'auto',
        minHeight: '50vh',
        padding: 10,
        marginTop: 10,
        marginBottom: 15
    },
    containerModalMobile:{
    
    }
});
export default styles;