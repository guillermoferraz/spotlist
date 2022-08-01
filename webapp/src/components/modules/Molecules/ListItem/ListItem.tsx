import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
/* Store */
import { RootState, useAppDispatch } from "src/services/Store";
import SpotifySlice from 'src/application/Spotify'


/* Styles */
import styles from './ListItem.styles';

export const ListItemModule = () => {
  const { theme } = useSelector((state: RootState) => state.Settings);
  const classes = styles(theme);
  const dispatch = useAppDispatch();
  const { searchResponse } = useSelector((state: RootState) => state.Spotify);
  const { setSelectedData } = SpotifySlice.actions;

  const [items, setItems] = useState<any>([]);

  useEffect(() => {
    if(searchResponse && searchResponse.tracks) setItems(searchResponse.tracks.items)
  },[searchResponse])

  const artistName = (artists) => {
    if(artists && artists.length > 0) {
     return  artists.map(artist => (
       (
          <span className={classes.artistName}>{artist.name} {artists.length > 1 ? ' / ' : '' }</span>
        )
      ))
    } else {
      return (<></>)
    }
  }

  const handleTrack = (item) => {
    dispatch(setSelectedData(item))
  }

  return (
    <div className={classes.root}> 
      {items && items.length > 0 && items.map(item => (
        <div className={classes.itemContainer} onClick={() => handleTrack(item)}>
          <div>
            <img className={classes.image} src={item.album.images[0].url}/>
          </div>
          <div className={classes.info}>
            {artistName(item.artists)}
            <p className={classes.textAlbum}>{item.album.name} / {item.album.release_date.split('-')[0]}</p>
            <p className={classes.trackName}>{item.name}</p>
          </div>
        </div>
      ))}
    </div>
  )
}