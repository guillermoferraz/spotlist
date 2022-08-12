import { makeStyles } from '@mui/styles';
import { ThemeTypes } from 'src/Assets/Themes/Theme.types';

const styles = makeStyles({
    root: {
        maxHeight: '30rem',
        margin:  20,
        overflowX: 'hidden',
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
            width: "5px",
            backgroundColor: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: "#93A0AD",
            borderRadius: "238px",
        },
        "&::-webkit-scrollbar-track": {
            marginBottom: 30,
            marginTop: 30
        },
    },
    containerItem:{
        padding: '5px 0px 5px 20px',
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        borderBottom: (props:ThemeTypes) => `1px solid ${props.colorPalletPrimary}`,
        '&>div':{
            '&>:nth-child(1)':{
                color: (props: ThemeTypes) => props.errorPrimary,
                margin: 0,
                padding: 0,
                marginRight: 15,
                display: 'none',
                position: 'relative',
                zIndex: 10
            }
        },
        '&:hover':{
            backgroundColor: (props:ThemeTypes) => props.bgHover,
            cursor: 'pointer',
            '&>div':{
                '&>:nth-child(1)':{
                    display: 'inline'
                }
            },
        }
    },
    itemText:{
        color: (props:ThemeTypes) => props.colorPrimary,
        margin: '5px 0px 5px 0px',
        fontSize: '0.75rem',
        width: '100%'
     },
    trackNumber:{
        color: (props: ThemeTypes) => props.colorPalletPrimary,
        marginRight: 15,
        textAlign: 'right'
    },
    duration: {
        color: (props:ThemeTypes) => props.colorPrimary,
        margin: '5px 20px 5px 0px',
        fontSize: '0.75rem',
    },
    containerBtn:{
        width: '8rem'
    },
    equal:{
        padding: '0px 0px 0px 20px',
        margin: 0,
        display: 'flex',
        borderBottom: (props:ThemeTypes) => `1px solid ${props.colorPalletPrimary}`,
        backgroundColor: (props:ThemeTypes) => props.bgHover,
        '&:hover':{
            cursor: 'pointer'
        }
    },
});
export default styles;
