import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

/* Store */
import { RootState, useAppDispatch } from 'src/services/Store';
import SpotifySlice, { getCurrentPlayback } from 'src/application/Spotify';
import { getLyrics } from 'src/application/Additional';

/* Module */
import { Loading } from '../../Layouts/Loading';

/* Styles */
import styles from './Listening.styles';
import ReplayIcon from '@mui/icons-material/Replay';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export const Listening = () => {
  const mediaQueryTheme = useTheme();
  const mobile = useMediaQuery(mediaQueryTheme.breakpoints.down('sm'))
  const { theme } = useSelector((state: RootState) => state.Settings);
  const { accessToken, currentPlayback, loading, selectedData } = useSelector((state: RootState) => state.Spotify);
  const { lyrics, additionalLoading } = useSelector((state: RootState) => state.Additional);
  const classes = styles(theme);
  const dispatch = useAppDispatch();
  const { setPlaybackLoaded } = SpotifySlice.actions;
  const [isPlaying, setisPlaying] = useState<any>({})
  const [image, setImage] = useState<any>(null)
  const [artist, setArtist] = useState<any>(null)
  const [track, setTrack] = useState<any>(null)
  const [album, setAlbum] = useState<any>(null)
  const [date, setDate] = useState<any>(null)

  useEffect(() => {
    dispatch((getCurrentPlayback({ accessToken: accessToken })))
  }, [])

  const handleReload = () => {
    dispatch((getCurrentPlayback({ accessToken: accessToken })))
  }

  useEffect(() => {
    if (selectedData) setTimeout(() => { handleReload() }, 4500)
  }, [selectedData])

  useEffect(() => {
    if (currentPlayback) setisPlaying(currentPlayback)
  }, [currentPlayback])

  useEffect(() => {
    artist && track && dispatch(getLyrics({ artist: artist[0]?.name, track: track }))
  }, [track, artist])

  const artistName = (artists) => {
    if (artists && artists.length > 0) {
      return artists.map(artist => (
        (
          <span className={classes.artistName}>{artist.name} {artists.length > 1 ? ' / ' : ''}</span>
        )
      ))
    } else {
      return (<></>)
    }
  }

  useEffect(() => {
    if (isPlaying) {
      setImage(isPlaying?.item?.album?.images[0]?.url)
      setArtist(isPlaying?.item?.artists)
      setTrack(isPlaying?.item?.name)
      setAlbum(isPlaying?.item?.album?.name)
      setDate(isPlaying?.item?.album?.release_date.split('-')[0])
    }
  }, [isPlaying])

  return (
    <div className={!mobile ? classes.root : classes.rootMobile}>
      {(loading || additionalLoading) && <Loading />}
      {!mobile && (
        <>
          <div className={classes.info}>
            <div className={classes.containerIcon}>
              <ReplayIcon onClick={() => handleReload()} />
            </div>
            <div>
              {isPlaying && <img className={classes.image} src={image} />}
              {artist && <p className={classes.artistName}>{artistName(artist)}</p>}
              {album && <p className={classes.artistName}>{album}{' '}{date}</p>}
              {track && <p className={classes.track}>{track}</p>}
            </div>
          </div>
          <div className={classes.lyrics}>
            {lyrics && (
              <pre className={classes.textLyrics}>
                {`${lyrics || ""}`}
              </pre>
            )}
          </div>
        </>
      )}
      {mobile && (
        <>
          <div className={classes.infoMobile}>
            <div className={classes.containerIconMobile}>
              <ReplayIcon onClick={() => handleReload()} />
            </div>
            <div>
              {isPlaying && <img className={classes.imageMobile} src={image} />}
              {artist && <p className={classes.artistNameMobile}>{artistName(artist)}</p>}
              {album && <p className={classes.artistNameMobile}>{album}{' '}{date}</p>}
              {track && <p className={classes.trackMobile}>{track}</p>}
            </div>
            <div className={classes.lyricsMobile}>
            {lyrics && (
              <pre className={classes.textLyricsMobile}>
                {`${lyrics || ""}`}
              </pre>
            )}
          </div>
          </div>
        </>
      )}
    </div>
  )
}