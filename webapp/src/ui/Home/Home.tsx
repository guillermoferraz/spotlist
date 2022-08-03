import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

/* Store */
import { RootState } from 'src/services/Store';
import { useAppDispatch } from 'src/services/Store';
import UserSlice, { getUser } from 'src/application/User';
import SpotifySlice, { getLoginData, searchTracks, getCurrentPlayback } from 'src/application/Spotify';
/* Modules */
import { AccessDenied } from 'src/components/modules/Layouts/AccessDenied';
import { Loading } from 'src/components/modules/Layouts/Loading';
import { RightMenu } from 'src/components/modules/Organisms/RightMenu';
import { CardGroup } from 'src/components/modules/Organisms/CardGroup';
import { Player } from 'src/components/modules/Molecules/Player';
import { Listening } from 'src/components/modules/Organisms/Listening';
import { ButtonArrow } from 'src/components/modules/Atoms/ButtonArrow';
/* Styles */
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import styles from './Home.styles'

export const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const mediaQueryTheme = useTheme();
  const mobile = useMediaQuery(mediaQueryTheme.breakpoints.down('sm'))
  const { t, theme } = useSelector((state: RootState) => state.Settings);
  const classes = styles(theme);
  const { user, code } = useSelector((state: RootState) => state.User);
  const { loginResponse, expiresIn, refreshToken, accessToken, spotifyEnabled, loading, saveRefreshToken, searchResponse, selectedData } = useSelector((state: RootState) => state.Spotify);
  const { setSpotCode } = UserSlice.actions;
  const { setSpotifyEnabled, getRefresh } = SpotifySlice.actions;
  const [denied, setDenied] = useState(false);
  const [search, setSearch] = useState<string>('')
  const [layout, setLayout] = useState('');

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
    if(layout === 'LISTENING') setLayout('')
    if(layout === ''){
      dispatch(getCurrentPlayback({ accessToken : accessToken}))
      setTimeout(() => {setLayout("LISTENING")}, 400)
    } 
  }

  const LayoutReturn = (layout) => {
    switch(layout){
      case 'LISTENING':
        return ( <Listening/>)
      default:
        return ( <CardGroup searchResults={searchResponse.tracks.items} />)
    }
  }

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
