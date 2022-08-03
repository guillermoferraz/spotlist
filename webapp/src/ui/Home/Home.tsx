import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

/* Store */
import { RootState } from 'src/services/Store';
import { useAppDispatch } from 'src/services/Store';
import UserSlice, { getUser } from 'src/application/User';
import SpotifySlice, { getLoginData, searchTracks, getCurrentPlayback, getAlbumByArtist } from 'src/application/Spotify';
import SettingsSlice from 'src/application/Settings';
/* Modules */
import { AccessDenied } from 'src/components/modules/Layouts/AccessDenied';
import { Loading } from 'src/components/modules/Layouts/Loading';
import { RightMenu } from 'src/components/modules/Organisms/RightMenu';
import { CardGroup } from 'src/components/modules/Organisms/CardGroup';
import { Player } from 'src/components/modules/Molecules/Player';
import { Listening } from 'src/components/modules/Organisms/Listening';
import { ButtonArrow } from 'src/components/modules/Atoms/ButtonArrow';
import { AlbumModule } from 'src/components/modules/Organisms/Album';
/* Styles */
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import styles from './Home.styles'

export const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const mediaQueryTheme = useTheme();
  const mobile = useMediaQuery(mediaQueryTheme.breakpoints.down('sm'))
  const { t, theme, layout } = useSelector((state: RootState) => state.Settings);
  const { setLayout } = SettingsSlice.actions;

  const classes = styles(theme);
  const { user, code } = useSelector((state: RootState) => state.User);
  const { 
    expiresIn, 
    refreshToken, 
    accessToken, 
    spotifyEnabled, 
    loading, 
    searchResponse, 
    selectedData, 
    albumByArtist,
  } = useSelector((state: RootState) => state.Spotify);
  const { setSpotCode } = UserSlice.actions;
  const { setSpotifyEnabled, getRefresh } = SpotifySlice.actions;
  const [denied, setDenied] = useState(false);
  const [search, setSearch] = useState<string>('')
  const [artistId, setArtistId] = useState<string|null|undefined>(null);

  const buttonPlay = (document.querySelector('.rswp__toggle') as HTMLButtonElement);

  const checkListening = (title) => {
    if(title && title === 'Pause'){
      dispatch(getCurrentPlayback({ accessToken : accessToken}))
    }
  }
  useEffect(() => {
    buttonPlay && buttonPlay.addEventListener('click', () => checkListening(buttonPlay.title) )
  },[buttonPlay])

  
  useEffect(() => {
    dispatch(getUser())
    dispatch(setSpotCode())
  }, [])

  useEffect(() => {dispatch(getLoginData(code))},[code])
  useEffect(() => {
    if (expiresIn > 0 && refreshToken) {
      dispatch(setSpotifyEnabled({ value: true }))
    } else {
      dispatch(setSpotifyEnabled({ value: false }))
    }
  }, [refreshToken])

  const redirectLogin = () => { navigate('/signin') }

  useEffect(() => {
    if (user && user?.access === 'Denied' && !spotifyEnabled) {
      setDenied(true)
      setTimeout(redirectLogin, 1500)
    }
    else setDenied(false)
  }, [user])

  const handleSearch = () => {
    if (search) {
      dispatch(searchTracks({ search: search, accessToken: accessToken }))
    }
  }
  const onKeyPress = (event) => { if (event.key === 'Enter') handleSearch() }

  const PlayerModule = () => {
    return (
      <Player />
    )
  }

  const handleLayout = () => {
    if(layout !== 'HOME') dispatch(setLayout({ value: 'HOME' }))
    if(layout === 'HOME'){
      dispatch(getCurrentPlayback({ accessToken : accessToken}))
      setTimeout(() => {dispatch(setLayout({ value:'LISTENING' }))}, 400)
    } 
  }

  const LayoutReturn = (layout) => {
    switch(layout){
      case 'LISTENING':
        return ( <Listening/>)
      case 'ALBUM':
        return (<AlbumModule/>)
      default:
        return (<CardGroup searchResults={albumByArtist.items} />)
    }
  }

  useEffect(() => {
    if(selectedData) setArtistId(selectedData?.artists[0]?.id)
  },[selectedData])

  useEffect(() => {
    if(artistId) dispatch(getAlbumByArtist({accessToken: accessToken, id: artistId}))
  },[artistId])

  return (
    <div className={classes.root}>
      <title>{t.appName}&nbsp;|&nbsp;{t.title.home}</title>
      {denied && <AccessDenied />}
      {loading && <Loading />}
      {searchResponse && searchResponse.tracks && searchResponse.tracks.items.length > 0 && (
        <div className={classes.containerGroup}>
          <ButtonArrow layout={layout} onClick={() => handleLayout() }/>
          {LayoutReturn(layout)}
          {PlayerModule()}
        </div>
      )}
      <RightMenu search={search} setSearch={setSearch} handleSearch={handleSearch} onKeyPress={onKeyPress} />
    </div>
  )
}
