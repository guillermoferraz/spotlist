import { makeStyles } from '@mui/styles';
import { ThemeTypes } from 'src/Assets/Themes/Theme.types';

const styles = makeStyles({
    root: {
        display: 'flex',
        margin: 0,
    },
    rootMobile: {
        display: 'inline'
    },
    containerGroup: {
        width: '100%',
    },
    containerBtn: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    cardGroupMobile: {
        marginTop: 30,
        '&>div': {
            width: '100vw',
            ['@media (min-width: 390px)']: {
                gridTemplateColumns: 'repeat(2, 1fr)',
            },
        },
    },
    playerMobile: {
        '&>div': {
            width: '100vw',
            marginTop: 10,
            padding: 0
        }
    },
    containerIconSearch: {
        border: (props: ThemeTypes) => `1px solid ${props.colorPalletPrimary}`,
        width: 40,
        height: 40,
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        backgroundColor: (props: ThemeTypes) => props.bgSecondary,
        '&:hover': {
            backgroundColor: (props: ThemeTypes) => props.bgHover,
            '&>svg': {
                color: (props: ThemeTypes) => props.colorPrimary,
            }
        },
        '&>svg': {
            color: (props: ThemeTypes) => props.colorPalletPrimary,
        }
    },
    containerSearchView: {
        width: '100vw !important',
        '&>div': {
            minWidth: '100vw !important',
            border: '1px solid green',
            '&>div': {
                '&>div': {
                    '&>div>img':{
                        maxWidth: '60px !important',
                        maxHeight: '60px !important'
                    },
                    '&>div': {
                        '&>span': {
                            fontSize: 11
                        },
                        '&>p': {
                            fontSize: 12
                        }
                    }
                }
            }
        }
    },
    albumMobile:{
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