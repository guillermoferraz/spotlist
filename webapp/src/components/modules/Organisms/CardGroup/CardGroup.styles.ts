import { makeStyles } from '@mui/styles';
import { ThemeTypes } from 'src/Assets/Themes/Theme.types';

const styles = makeStyles({
    root: {
        display: 'grid',
        gap: 10,
        margin: 'auto',
        overflowX: 'hidden',
        overflowY: 'auto',
        maxHeight: '85vh',
        width: '100%'
    },
    ['@media (min-width: 300px)']: {
        root: {
            gridTemplateColumns: 'repeat(2, 1fr)',
        }
    },
    ['@media (min-width: 600px)']: {
        root: {
            gridTemplateColumns: 'repeat(3, 1fr)',
        }
    },
    ['@media (min-width: 900px)']: {
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