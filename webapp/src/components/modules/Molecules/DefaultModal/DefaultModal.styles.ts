import { makeStyles } from '@mui/styles';
import { ThemeTypes } from 'src/Assets/Themes/Theme.types';

const styles = makeStyles({
    root: {
    },
    dialog: {
        '&>.MuiDialog-container': {
            backgroundColor: 'rgba(0,0,0,0.7)',
            '&>div':{
                backgroundColor: 'transparent',
                boxShadow: (props: ThemeTypes) => `0px 3px 10px  ${props.colorPalletPrimary}`,
                borderRadius: 15
            }
        }
    },
    container:{
        minWidth: '20rem',
        padding: 30,
        backgroundColor: (props: ThemeTypes) => props.bgSecondary,
        borderRadius: 15
    },
    containerBtn:{
        marginTop: 15
    },
    title:{
        color: (props: ThemeTypes) => props.colorPalletPrimary,
        textAlign: 'center'
    },
    containerList:{
        border: (props: ThemeTypes) => `1px solid ${props.colorPalletPrimary}`,
        borderRadius: 15,
    },
    item:{
        color: (props: ThemeTypes) => props.colorPrimary,
        '&:hover':{
            backgroundColor: (props: ThemeTypes) => props.bgHover,
            borderRadius: 10,
            cursor: 'pointer'
        },
        '&>p':{
            margin: 0,
            fontSize: '0.8rem',
            padding: '3px 10px 3px 10px'
        }
    },
    itemSelected:{
        color: (props: ThemeTypes) => props.colorPrimary,
        cursor: 'pointer',
        backgroundColor: (props: ThemeTypes) => props.bgHover,
        borderRadius: 10,
        '&>p':{
            margin: 0,
            fontSize: '0.8rem',
            padding: '3px 10px 3px 10px'
        }
    },
    dontList:{
        color: (props: ThemeTypes) => props.colorPalletPrimary,
        textAlign: 'center',
        fontSize: '0.8rem'
    }
});
export default styles;