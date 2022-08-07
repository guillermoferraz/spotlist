import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
/* Store */
import { RootState, useAppDispatch } from "src/services/Store";
import SpotifySlice,{ getCurrentPlayback, getAlbum } from 'src/application/Spotify';

/* styles */
import styles from './TrackList.styles';

export const TrackList = () => {
  const dispatch = useAppDispatch();
  const { theme, t } = useSelector((state: RootState) => state.Settings);
  const classes = styles(theme);
  const { trackList } = useSelector((state: RootState) => state.Lists);
  const { accessToken, currentPlayback } = useSelector((state: RootState) => state.Spotify);
  const { setSelectedData } = SpotifySlice.actions;
  const [current, setCurrent] = useState<any>(null)


  const returnDuration = (duration) => {
    if(duration){
      const convertDuration = ((duration / 1000) / 60).toString()
      const valueOne = convertDuration && convertDuration.includes('.') && convertDuration.split('.')[0]
      const valueTwo =convertDuration && convertDuration.includes('.') && convertDuration.split('.')[1].slice(0,2)
      return `${valueOne}:${valueTwo}`
    } else {
      return '00:00'
    }
  }

  const handleTrack = (item, index) => {
    const arrayTracks = trackList.tracks.filter((track, i) => i >= index)
   dispatch(setSelectedData({ item: { ...item, uri: arrayTracks } }))
   setTimeout(() => { dispatch((getCurrentPlayback({ accessToken: accessToken }))) }, 1000)
  }

  useEffect(() => {currentPlayback && setCurrent(currentPlayback) },[currentPlayback])

  return (
    <div className={classes.root}>
      {trackList && trackList.items.map((track, index) => (
        <div key={JSON.parse(track).id} className={current && current?.item?.id === JSON.parse(track).id ? classes.equal : classes.containerItem}>
          <p className={classes.itemText} onClick={() => handleTrack(JSON.parse(track), index)}>
            <span className={classes.trackNumber}>
              {index + 1}
            </span>
            {JSON.parse(track).name}     
          </p>
          <div style={{ position: 'relative', marginInlineStart: 'auto', height: '100%', display: 'flex', alignItems: 'center'}}>
            <span className={classes.duration}>
              {returnDuration(JSON.parse(track).duration_ms)}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}