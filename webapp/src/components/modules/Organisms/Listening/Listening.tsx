import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

/* Store */
import { RootState, useAppDispatch } from 'src/services/Store';
import SpotifySlice, { getCurrentPlayback } from 'src/application/Spotify';

/* Module */
import { Loading } from '../../Layouts/Loading';

/* Styles */
import styles from './Listening.styles';

export const Listening = () => {
  const { theme } = useSelector((state: RootState) => state.Settings);
  const { accessToken, currentPlayback, loading, selectedData } = useSelector((state: RootState) => state.Spotify);
  const classes = styles(theme);
  const dispatch = useAppDispatch();
  const { setPlaybackLoaded } = SpotifySlice.actions;
  const [isPlaying, setisPlaying] = useState<any>({})
  const [image, setImage] = useState<any>(null)
  const [artist, setArtist] = useState<any>(null)
  const [track, setTrack] = useState<any>(null)
  const [album, setAlbum] = useState<any>(null)

  useEffect(() => {
    dispatch((getCurrentPlayback({ accessToken: accessToken })))
  }, [])

  const handleReload = () => {
    dispatch((getCurrentPlayback({ accessToken: accessToken })))
  }

  useEffect(() => {
    if(selectedData) setTimeout(() => {handleReload()}, 4500)
  },[selectedData])

  useEffect(() => {
    if(currentPlayback) setisPlaying(currentPlayback)
  },[currentPlayback])

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

  useEffect(() => {
    if(isPlaying){
      setImage(isPlaying?.item?.album?.images[0]?.url)
      setArtist(isPlaying?.item?.artists)
      setTrack(isPlaying?.item?.name)
      setAlbum(isPlaying?.item?.album?.name)
    }
  },[isPlaying])

  console.log(isPlaying, track)
  return (
    <div className={classes.root}>
      {loading && <Loading/>}
      <button onClick={() => handleReload()}>Reload</button>
      <div>
        {isPlaying &&<img className={classes.image} src={image} />}
        {artist && <p>{artistName(artist)}</p>}
        {album && <p>{album}</p>}
        {track && <p className={classes.track}>{track}</p>}
      </div>
    </div>
  )
}