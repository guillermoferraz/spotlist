import { useSelector } from "react-redux";
import { RootState } from "src/services/Store";

import styles from './Logo.styles';

export const Logo = () => {
    const { theme } = useSelector((state: RootState) => state.Settings);
    const classes = styles(theme);
    return (
        <div className={classes.root}>
            <img src="/img/logo.png" alt="Spotlist logo"/>
        </div>
    )
}