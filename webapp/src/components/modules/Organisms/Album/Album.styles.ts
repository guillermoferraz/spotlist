import { makeStyles } from '@mui/styles';
import { ThemeTypes } from 'src/Assets/Themes/Theme.types';

const styles = makeStyles({
    root: {
        minHeight: '70vh',
        backgroundColor: (props: ThemeTypes) => props.bgSecondary,
        margin: 15,
        borderRadius: 25
    },
    content:{
    },
    artistName:{
        color: (props: ThemeTypes) => props.colorPrimary,
        textAlign: 'center',
        letterSpacing: 2,
        paddingTop: 15,
        fontSize: '1.2rem'
    },
    conteinerImg:{
        '&>img':{
            maxWidth: '26rem',
            maxHeight: '26rem',
            margin: 15,
            borderRadius: 25
        }
    },
    containerFlex:{
        display: 'flex',
        width: '100%'
    },
    rootMobile: {
        minHeight: '70vh',
        minWidth: '100vw',
        backgroundColor: (props: ThemeTypes) => props.bgSecondary,
        borderRadius: 25
    },
    contentMobile:{
    },
    artistNameMobile:{
        color: (props: ThemeTypes) => props.colorPrimary,
        textAlign: 'center',
        letterSpacing: 2,
        paddingTop: 15,
        fontSize: '0.8rem'
    },
    conteinerImgMobile:{
        '&>img':{
            maxWidth: '10rem',
            maxHeight: '10rem',
            margin: 15,
            borderRadius: '50%'
        }
    },
    containerFlexMobile:{
      height: '60vh',
      '&>:nth-child(1)':{
        textAlign: 'center'
      },
      '&>div':{
        margin: 'auto',
      }
    },
    containerAlbumList:{
        '&>div':{
            margin: 'auto',
            maxHeight: '37vh',
            width: '90vw'
        }
    }
});
export default styles;