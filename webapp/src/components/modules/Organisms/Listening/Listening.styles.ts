import { makeStyles } from '@mui/styles';
import { ThemeTypes } from 'src/Assets/Themes/Theme.types';

const styles = makeStyles({
    root:{
        padding: 15
    },
    image: {
        width: '16rem',
        height: '16rem',
        borderRadius: '50%',
        boxShadow: (props: ThemeTypes) =>  `0px 3px 16px ${props.colorPalletPrimary}`
    },
    artistName: {

    },
    track:{
        
    }
});
export default styles;