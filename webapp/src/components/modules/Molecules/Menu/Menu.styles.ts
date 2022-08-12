import { makeStyles } from '@mui/styles';
import { ThemeTypes } from 'src/Assets/Themes/Theme.types';

const styles = makeStyles({
  list: {
    '&>.MuiPaper-root': {
      boxShadow: (props: ThemeTypes) => `0px 3px 16px ${props.colorPalletPrimary}`,
      backgroundColor: (props: ThemeTypes) => props.bgSecondary,
      color: (props: ThemeTypes) => props.colorPrimary,
      '&>ul': {
        '&>:nth-child(4)': {
          '&:hover': {
            color: (props: ThemeTypes) => props.colorHover,
            backgroundColor: (props: ThemeTypes) => props.bgHover,
          }
        },
        '&>:nth-child(5)': {
          '&:hover': {
            color: (props: ThemeTypes) => props.colorHover,
            backgroundColor: (props: ThemeTypes) => props.bgHover,
          }
        }
      },
      '&>.MuiList-root': {
        marginTop: 5,
        padding: 0,
      },
    },
  },
  label: {
    fontSize: '0.8rem',
    margin: '0px 0px 0px 5px',
    color: (props: ThemeTypes) => props.colorHover
  },
  divider: {
  }
});
export default styles;