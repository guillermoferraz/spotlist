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
    }
});
export default styles;