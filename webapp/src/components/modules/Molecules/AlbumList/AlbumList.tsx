import { useSelector } from 'react-redux';
/* Store */
import { RootState, useAppDispatch } from 'src/services/Store';
import SpotifySlice from 'src/application/Spotify';

/* Styles */
import styles from './AlbumList.styles';

export const AlbumList = () => {
  const dispatch = useAppDispatch();
  const { theme } = useSelector((state: RootState) => state.Settings);
  const { album } = useSelector((state: RootState) => state.Spotify);
  const { setSelectedData } = SpotifySlice.actions;

  const classes = styles(theme);

  const returnDuration = (duration) => {
    if(duration){
      const convertDuration = ((duration / 1000) / 60).toString()
      const valueOne =convertDuration.split('.')[0]
      const valueTwo = convertDuration.split('.')[1].slice(0,2)
      return `${valueOne}:${valueTwo}`
    } else {
      return '00:00'
    }
  }
  const handleTrack = (item) => {
    dispatch(setSelectedData({ item: item }))
  }

  return (
    <div className={classes.root}>
      {album && album.tracks && album.tracks.items.length > 0 && album.tracks.items.map(item => (
        <div key={item.id} className={classes.containerItem} onClick={() => handleTrack(item)}>
          <p className={classes.itemText}>
            <span className={classes.trackNumber}>
              {item.track_number}
            </span>
            {item.name}
            <span className={classes.duration}>
              {returnDuration(item.duration_ms)}
            </span>
          </p>
        </div>
      ))}
    </div>
  )
}