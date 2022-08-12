import { useSelector } from 'react-redux';
import { RootState } from 'src/services/Store';

/* Styles */
import styles from './SplitScreen.styles';

export const SplitScreen = () => {
  const {t, theme } = useSelector((state: RootState) => state.Settings);
  const classes = styles(theme);
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <h1 className={classes.title}>{t.appName}</h1>
        <div className={classes.containerLogo}>
          <img src="/img/logo.png" alt="Spotlist logo" />
        </div>
        <h4 className={classes.title}>{t.description}</h4>
      </div>
    </div>
  )
}