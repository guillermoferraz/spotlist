import { useSelector } from 'react-redux';

/* Store */
import { RootState } from 'src/services/Store';

/* Styles */
import CircularProgress from '@mui/material/CircularProgress';
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt';
import styles from './AccessDenied.styles';

export const AccessDenied = () => {
    const { theme ,t } = useSelector((state: RootState) => state.Settings);
    const classes = styles(theme);
    return (
        <div className={classes.root}>
            <div>
                <div className={classes.iconDenied}>
                    <DoDisturbAltIcon/>
                </div>
                <CircularProgress color="success" />
                <h4>{t.accessDenied}</h4>
                <h5>{t.accessDeniedInfo}</h5>
            </div>
        </div>
    )
}