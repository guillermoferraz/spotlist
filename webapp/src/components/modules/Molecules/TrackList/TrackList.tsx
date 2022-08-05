import { useSelector } from "react-redux";
/* Store */
import { RootState } from "src/services/Store";

/* styles */
import styles from './TrackList.styles';

export const TrackList = () => {
  const { theme, t } = useSelector((state: RootState) => state.Settings);
  const classes = styles(theme);

  
  return (
    <div className={classes.root}>
      <h1>Track list</h1>
    </div>
  )
}