import { useSelector } from 'react-redux';

/* Store */
import { RootState } from 'src/services/Store';

/* Styles */
import CircularProgress from '@mui/material/CircularProgress';
import styles from './Loading.styles';

export const Loading = () => {
    const { theme ,t } = useSelector((state: RootState) => state.Settings);
    const classes = styles(theme);
    return (
        <div className={classes.root}>
            <div>
                <CircularProgress color="success" />
                <h4>{t.wait}</h4>
            </div>
        </div>
    )
}