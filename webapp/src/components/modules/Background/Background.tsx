import { RootState } from "../../../services/Store";
import { useSelector } from "react-redux";

import styles from './Background.styles';

export const Background = () => {
    const { theme } = useSelector((state: RootState) => state.Settings);
    const classes = styles(theme);

    return (
        <div className={classes.root}/>
    )
}