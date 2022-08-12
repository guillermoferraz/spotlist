import { makeStyles } from '@mui/styles';
import { ThemeTypes } from 'src/Assets/Themes/Theme.types';

const styles = makeStyles({
  root: {
    backgroundColor: (props: ThemeTypes) => props.bgSecondary,
    width: 250,
    marginInlineStart: 'auto',
    minHeight: '90vh',
    margin: 0,
    padding: 0
  },
  containerSearch: {
    padding: 20
  },
  icon: {
    maxWidth: '1.5rem',
    maxHeight: '1.5rem',
    color: (props: ThemeTypes) => props.colorPalletPrimary
  },
  ['@media (min-width: 560px)']: {
    root: {
      minWidth: '10vw'
    }
  },
  ['@media (min-width: 889px)']: {
    root: {
    }
  },
  ['@media (min-width: 1024px)']: {
    root: {
      width: 350
    }
  },
  ['@media (min-width: 1200px)']: {
    root: {
      width: 350
    }
  }
});
export default styles;