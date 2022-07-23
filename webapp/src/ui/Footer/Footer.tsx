import { useSelector } from 'react-redux';
import { RootState } from '../../services/Store';

/* Styles */
import styles from './Footer.styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer = () => {
    const { theme } = useSelector((state: RootState) => state.Settings);
    const classes = styles(theme);
    return (
        <footer className={classes.root}>
            <section>
               <p>2022 - Guillermo Ferraz</p>
               <a href="https://www.linkedin.com/in/guillermo-ferraz-b24b231b4" target="_blank" title="Linkedin"><LinkedInIcon/></a>
            </section>
        </footer>
    )
}