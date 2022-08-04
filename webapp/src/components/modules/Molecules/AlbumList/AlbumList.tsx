import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
/* Store */
import { RootState, useAppDispatch } from 'src/services/Store';
import SpotifySlice,{ getCurrentPlayback } from 'src/application/Spotify';

/* Styles */
import styles from './AlbumList.styles';

export const AlbumList = () => {
  const dispatch = useAppDispatch();
  const { theme, t } = useSelector((state: RootState) => state.Settings);
  const { album, currentPlayback, selectedData, accessToken } = useSelector((state: RootState) => state.Spotify);
  const { setSelectedData } = SpotifySlice.actions;
  const [current, setCurrent] = useState<any>(null)
  const [showAddList, setShowAddList] = useState({ id: undefined, enabled: false })

  const classes = styles(theme);

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
  const handleTrack = (item) => {
    dispatch(setSelectedData({ item: item }))
  }
  useEffect(() => {
    if (selectedData) {
      setTimeout(() => { handleReload() }, 4500)
    }
  },[ selectedData])

  
  useEffect(() => {currentPlayback && setCurrent(currentPlayback) },[currentPlayback])

  const handleReload = () => {
    dispatch((getCurrentPlayback({ accessToken: accessToken })))
  }


  return (
    <div className={classes.root}>
      {album && album.tracks && album.tracks.items.length > 0 && album.tracks.items.map(item => (
        <div key={item.id} className={
          current && current?.item?.id === item.id ? classes.equal : classes.containerItem
          } onClick={() => handleTrack(item)}
          onMouseEnter={() => setShowAddList({ id: item.id, enabled: true })}
          onMouseLeave={() => setShowAddList({ id: undefined, enabled: false })}
          >
          <p className={classes.itemText}>
            <span className={classes.trackNumber}>
              {item.track_number}
            </span>
            {item.name}
            {showAddList.id === item.id && (<span className={classes.addOnList}>+{' '}{t.add}</span>)}
            <span className={classes.duration}>
              {returnDuration(item.duration_ms)}
            </span>
          </p>
        </div>
      ))}
    </div>
  )
}