import { makeStyles } from '@mui/styles';
import { ThemeTypes } from 'src/Assets/Themes/Theme.types';

const styles = makeStyles({
    root: {
        display: 'flex',
        margin: 0,
    },
    containerGroup: {
        width: '100%',
    },
    ['@media (min-width: 360px)']: {
        containerGroup: {
            width: '53%'
        }
    },
    ['@media (min-width: 480px)']: {
        containerGroup: {
            width: '65%'
        }
    },
    ['@media (min-width: 560px)']: {
        containerGroup: {
            width: '70%'
        }
    },
    ['@media (min-width: 889px)']: {
        containerGroup: {
            width: '75%'
        }
    },
    ['@media (min-width: 1024px)']: {
        containerGroup: {
            width: '80%'
        }
    },
    ['@media (min-width: 1200px)']: {
        containerGroup: {
            width: '100%'
        }
    }
});
export default styles;