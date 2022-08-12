import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

/* Store */
import { RootState } from 'src/services/Store';
import { useAppDispatch } from 'src/services/Store';
import UserSlice, { getUser } from 'src/application/User';
import SpotifySlice, { getLoginData, searchTracks, getCurrentPlayback, getAlbumByArtist, getTopArtists } from 'src/application/Spotify';
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
import { ListsModule } from 'src/components/modules/Organisms/Lists';
/* Styles */
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import PlaylistAddCircleIcon from '@mui/icons-material/PlaylistAddCircle';
import AlbumIcon from '@mui/icons-material/Album';
import styles from './Home.styles'

export const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const mediaQueryTheme = useTheme();
  const mobile = useMediaQuery(mediaQueryTheme.breakpoints.down('sm'))
  const { t, theme, layout, showSearch } = useSelector((state: RootState) => state.Settings);
  const { setLayout, setShowSearch } = SettingsSlice.actions;

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
    top
  } = useSelector((state: RootState) => state.Spotify);
  const { setSpotCode } = UserSlice.actions;
  const { setSpotifyEnabled, getRefresh } = SpotifySlice.actions;
  const [denied, setDenied] = useState(false);
  const [search, setSearch] = useState<string>('')
  const [artistId, setArtistId] = useState<string | null | undefined>(null);
  const [data, setData] = useState<any>(null);

  const buttonPlay = (document.querySelector('.rswp__toggle') as HTMLButtonElement);

  const checkListening = (title) => {
    if (title && title === 'Pause') {
      dispatch(getCurrentPlayback({ accessToken: accessToken }))
    }
  }
  useEffect(() => {
    buttonPlay && buttonPlay.addEventListener('click', () => checkListening(buttonPlay.title))
  }, [buttonPlay])


  useEffect(() => {
    dispatch(getUser())
    dispatch(setSpotCode())
  }, [])

  useEffect(() => { dispatch(getLoginData(code)) }, [code])
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
      !mobile ? <Player /> : <div className={classes.playerMobile}><Player/></div> 
    )
  }

  const handleLayout = (type) => {
    if (layout !== 'HOME') dispatch(setLayout({ value: 'HOME' }))
    if (layout === 'HOME' && type === "LISTENING") {
      dispatch(getCurrentPlayback({ accessToken: accessToken }))
      setTimeout(() => { dispatch(setLayout({ value: 'LISTENING' })) }, 400)
    }
    if (layout === 'HOME' && type === "ALBUM") {
      setTimeout(() => { dispatch(setLayout({ value: 'ALBUM' })) }, 400)
    }
    if (layout === 'HOME' && type === "LISTS") {
      setTimeout(() => { dispatch(setLayout({ value: 'LISTS' })) }, 400)
    }
  }

  const LayoutReturn = (layout) => {
    switch (layout) {
      case 'LISTENING':
        return (<Listening />)
      case 'ALBUM':
        return !mobile ? (<AlbumModule />) : (<div className={classes.albumMobile}><AlbumModule/></div>)
      case 'LISTS':
        return (<ListsModule/>)
      default:
        return !mobile ? (<CardGroup searchResults= {albumByArtist && albumByArtist.items === undefined ? data?.tracks?.items :  albumByArtist.items} />) : <div className={classes.cardGroupMobile}><CardGroup searchResults= {albumByArtist && albumByArtist.items === undefined ? data?.tracks?.items :  albumByArtist.items} /></div>
    }
  }

  useEffect(() => {
    if (selectedData) setArtistId(selectedData?.artists[0]?.id)
  }, [selectedData])

  useEffect(() => {
    if (artistId) dispatch(getAlbumByArtist({ accessToken: accessToken, id: artistId }))
  }, [artistId])

  useEffect(() => {
    if(accessToken && accessToken !== undefined) dispatch(getTopArtists({ accessToken: accessToken }))
  },[accessToken])

  useEffect(() => {
    if(top && searchResponse && searchResponse.tracks.items.length === 0){
      setData(top)
    } else if (top && searchResponse){
      setData(searchResponse)
    }
  },[top, searchResponse])

  const handleSearchView = () => {
    dispatch(setShowSearch({value: !showSearch}))
  }

  return (
    <div className={mobile ? classes.rootMobile: classes.root}>
      <title>{t.appName}&nbsp;|&nbsp;{t.title.home}</title>
      {denied && <AccessDenied />}
      {loading && <Loading />}
      {data && data.tracks && data.tracks.items.length > 0 && (
        <div className={classes.containerGroup}>
          { !mobile && <div className={classes.containerBtn}>
            {layout !== 'LISTENING' && layout !== 'ALBUM' && <ButtonArrow
              layout={layout}
              condition="LISTS"
              text={{
                initial: t.title.home,
                onPage: t.lists
              }}
              onClick={() => handleLayout("LISTS")}
            />}
            {(layout === "HOME" || layout === "LISTENING") && <ButtonArrow
              layout={layout}
              condition="LISTENING"
              text={{
                initial: t.title.home,
                onPage: t.playbackPanel
              }}
              onClick={() => handleLayout("LISTENING")}
            />}
            {(layout === 'ALBUM' || layout === 'HOME') && <ButtonArrow
              layout={layout}
              condition="ALBUM"
              text={{
                initial: t.title.home,
                onPage: "Album"
              }}
              onClick={() => handleLayout("ALBUM")}
            />}
          </div> }

          {mobile && !showSearch && (
            <div style={{ display: 'flex', justifyContent: 'center', width: '100vw' }}>
              <div className={classes.containerIconSearch} onClick={() => handleSearchView()}>
                <ManageSearchIcon/>
              </div>
              <div className={classes.containerIconSearch} onClick={() => handleLayout("ALBUM")} >
                <LibraryMusicIcon/>
              </div>
              <div className={classes.containerIconSearch} onClick={() => handleLayout("LISTS")}>
                <PlaylistAddCircleIcon/>
              </div>
              <div className={classes.containerIconSearch} onClick={() => handleLayout("LISTENING")}>
                <AlbumIcon/>
              </div>
            </div>
          )}

          {mobile && !showSearch && LayoutReturn(layout)}
          {!mobile && LayoutReturn(layout)}
          {!mobile && PlayerModule()}
        </div>
      )}
      {!mobile && <RightMenu search={search} setSearch={setSearch} handleSearch={handleSearch} onKeyPress={onKeyPress} /> }
      {mobile && showSearch && (
        <div className={classes.containerSearchView}>
          <RightMenu search={search} setSearch={setSearch} handleSearch={handleSearch} onKeyPress={onKeyPress} />
        </div>
      )}
      {mobile && PlayerModule()}
    </div>
  )
}
