import { makeStyles } from '@mui/styles';
import { ThemeTypes } from 'src/Assets/Themes/Theme.types';

const styles = makeStyles({
    root:{
        padding: 15,
        minHeight: '69vh',
        display: 'flex'
    },
    image: {
        width: '16rem',
        height: '16rem',
        borderRadius: '50%',
        boxShadow: (props: ThemeTypes) =>  `0px 3px 16px ${props.colorPalletPrimary}`
    },
    artistName: {
        color: (props: ThemeTypes) => props.colorPrimary
    },
    track:{
        color: (props: ThemeTypes) => props.colorPrimary
    },
    info:{
        textAlign: 'center',
        padding: 15,
        backgroundColor: (props: ThemeTypes) => props.bgSecondary,
        borderRadius: 25,
        boxShadow:(props:ThemeTypes) =>  `0px 3px 16px ${props.colorPalletPrimary}`
    },
    lyrics:{
        border: '1px solid green',
        marginLeft: 10,
        width: '100%',
        borderRadius: 25,
        overflowX: 'hidden',
        overflowY: 'auto',
        maxHeight: '69vh',
        boxShadow:(props:ThemeTypes) =>  `0px 3px 16px ${props.colorPalletPrimary}`,
        backgroundColor: (props: ThemeTypes) => props.bgSecondary,
        '&::-webkit-scrollbar': {
            width: "5px",
            backgroundColor: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: "#93A0AD",
            borderRadius: "238px",
        },
        "&::-webkit-scrollbar-track": {
            marginTop: 20,
            marginBottom: 20
        },
    },
    containerIcon:{
        border: (props: ThemeTypes) => `1px solid ${props.colorPalletPrimary}`,
        width: '2.5rem',
        height: '2.5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:(props: ThemeTypes) => props.bgSecondary,
        borderRadius: '50%',
        margin: 10,
        marginInlineStart: 'auto',
        '&>svg':{
            color: (props: ThemeTypes) => props.colorPalletPrimary,
            cursor: 'pointer',
            '&:hover':{
                color: (props: ThemeTypes) => props.bgSecondary,
            }
        },
        '&:hover':{
            backgroundColor: (props: ThemeTypes) => props.bgHover,
            color: (props: ThemeTypes) => props.bgSecondary,
        }
    },
    textLyrics:{
        color: (props: ThemeTypes) => props.colorPrimary,
        textAlign: 'center',
        fontSize: '1.1rem',
        padding: 20
    },
    rootMobile:{
        width: '100vw'
    },
    imageMobile: {
        width: '6rem',
        height: '6rem',
        borderRadius: '50%',
        boxShadow: (props: ThemeTypes) =>  `0px 3px 16px ${props.colorPalletPrimary}`
    },
    artistNameMobile: {
        color: (props: ThemeTypes) => props.colorPrimary
    },
    trackMobile:{
        color: (props: ThemeTypes) => props.colorPrimary
    },
    infoMobile:{
        textAlign: 'center',
        padding: 15,
        backgroundColor: (props: ThemeTypes) => props.bgSecondary,
        borderRadius: 25,
        boxShadow:(props:ThemeTypes) =>  `0px 3px 16px ${props.colorPalletPrimary}`
    },
    lyricsMobile:{
        border: '1px solid green',
        width: '95%',
        borderRadius: 25,
        overflowX: 'auto',
        overflowY: 'auto',
        maxHeight: '30vh',
        margin: 'auto',
        textAlign: 'center',
        boxShadow:(props:ThemeTypes) =>  `0px 3px 16px ${props.colorPalletPrimary}`,
        backgroundColor: (props: ThemeTypes) => props.bgSecondary,
        '&::-webkit-scrollbar': {
            width: "5px",
            height: '5px',
            backgroundColor: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: "#93A0AD",
            borderRadius: "238px",
        },
        "&::-webkit-scrollbar-track": {
            marginTop: 20,
            marginBottom: 20
        },
    },
    containerIconMobile:{
        border: (props: ThemeTypes) => `1px solid ${props.colorPalletPrimary}`,
        width: '2.5rem',
        height: '2.5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:(props: ThemeTypes) => props.bgSecondary,
        borderRadius: '50%',
        margin: 10,
        marginInlineStart: 'auto',
        '&>svg':{
            color: (props: ThemeTypes) => props.colorPalletPrimary,
            cursor: 'pointer',
            '&:hover':{
                color: (props: ThemeTypes) => props.bgSecondary,
            }
        },
        '&:hover':{
            backgroundColor: (props: ThemeTypes) => props.bgHover,
            color: (props: ThemeTypes) => props.bgSecondary,
        }
    },
    textLyricsMobile:{
        color: (props: ThemeTypes) => props.colorPrimary,
        textAlign: 'center',
        fontSize: '0.8rem',
        margin: 20,
        padding: 20
    }
});
export default styles;