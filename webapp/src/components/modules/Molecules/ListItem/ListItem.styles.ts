import { makeStyles } from '@mui/styles';
import { ThemeTypes } from 'src/Assets/Themes/Theme.types';

const styles = makeStyles({
    root: {
        overflowX: 'hidden',
        overflowY: 'auto',
        maxHeight: '75vh',
        '&::-webkit-scrollbar': {
            width: "5px",
            backgroundColor: (props:ThemeTypes) => props.bgPrimary,
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: "#93A0AD",
            borderRadius: "238px",
        },
        "&::-webkit-scrollbar-track": {
            marginBottom: "70px",
        },
    },
    itemContainer:{
        padding: 4,
        borderTop: (props: ThemeTypes) => `1px solid ${props.colorPalletPrimary}`,
        display: 'flex',
        alignItems: 'center',
        margin: 5,
        '&:hover':{
            backgroundColor: (props: ThemeTypes) => props.bgHover,
            cursor: 'pointer',
        }
    },
    image :{
        maxWidth: '2rem',
        maxHeight: '2rem',
        borderRadius: '50%'
    },
    info:{
        color: (props: ThemeTypes) => props.colorPrimary,
        fontSize: '0.7rem',
        marginLeft: 8
    },
    textAlbum:{
        fontSize: '0.55rem',
        padding: 0,
        margin: 0
    },
    artistName:{
        fontSize: '0.55rem',
        fontWeight: 700
    },
    trackName:{
        margin: 0,
        color: (props: ThemeTypes) => props.colorHover,
        fontWeight: 700
    }
});
export default styles;