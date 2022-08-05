import { makeStyles } from '@mui/styles';
import { ThemeTypes } from 'src/Assets/Themes/Theme.types';

const styles = makeStyles({
    root: {
        marginTop: 10,
        overflowX: 'hidden',
        overflowY: 'auto',
        maxHeight: '68vh',
        '&::-webkit-scrollbar': {
            width: "5px",
            backgroundColor: (props: ThemeTypes) => props.bgPrimary,
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: "#93A0AD",
            borderRadius: "238px",
        },
        "&::-webkit-scrollbar-track": {
            marginBottom: "70px",
        },
    },
    containerItem: {
        borderBottom: (props: ThemeTypes) => `1px solid ${props.colorPalletPrimary}`,
        margin: 0,
        padding: 0,
        color: (props: ThemeTypes) => props.colorPrimary,
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: 'max-content',
        '&>:nth-child(1)': {
            fontSize: '0.8rem',
            margin: 5,
            width: '100%',
        },
        '&>:nth-child(2)': {
            display: 'none',
            margin: 0,
            padding: 0,
            '&>svg': {
                width: '1.2rem',
                height: '1.2rem',
                color: (props: ThemeTypes) => props.errorPrimary
            }
        },
        '&:hover': {
            backgroundColor: (props: ThemeTypes) => props.bgHover,
            cursor: 'pointer',
            '&>:nth-child(2)': {
                display: 'inline'
            }
        }
    },
    containerBtn: {
        display: 'flex',
        justifyContent: 'center',
        '&>div': {
            margin: '0px 10px 0px 10px',
        },
        '&>:nth-child(2)': {
            '&>button':{
                backgroundColor: (props: ThemeTypes) => `${props.errorPrimary} !important`,
                '&:hover':{
                    opacity: .65
                }
            }
        }
    }
});
export default styles;