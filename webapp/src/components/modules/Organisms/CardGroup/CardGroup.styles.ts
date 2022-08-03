import { makeStyles } from '@mui/styles';
import { ThemeTypes } from 'src/Assets/Themes/Theme.types';

const styles = makeStyles({
    root: {
        display: 'grid',
        gap: 10,
        overflowX: 'hidden',
        overflowY: 'auto',
        maxHeight: '73vh',
        margin: 'auto',
        width: '100%',
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
    ['@media (min-width: 560px)']: {
        root: {
            gridTemplateColumns: 'repeat(2, 1fr)',
        }
    },
    ['@media (min-width: 889px)']: {
        root: {
            gridTemplateColumns: 'repeat(3, 1fr)',
        }
    },
    ['@media (min-width: 1024px)']: {
        root: {
            gridTemplateColumns: 'repeat(4, 1fr)',
        }
    },
    ['@media (min-width: 1200px)']: {
        root: {
            gridTemplateColumns: 'repeat(5, 1fr)',
        }
    }
});
export default styles;