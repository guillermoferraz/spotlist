import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

/* Store */
import { RootState } from 'src/services/Store';
import { useAppDispatch } from 'src/services/Store';
import UserSlice, { getUser } from 'src/application/User';
import SpotifySlice, { getLoginData } from 'src/application/Spotify';
/* Modules */
import { AccessDenied } from 'src/components/modules/Layouts/AccessDenied';

import styles from './Home.module.css'

export const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, code } = useSelector((state: RootState) => state.User);
  const { t } = useSelector((state: RootState) => state.Settings);
  const { loginResponse ,expiresIn, refreshToken, accessToken, spotifyEnabled } = useSelector((state: RootState) => state.Spotify);
  const { setSpotCode } = UserSlice.actions;
  const { setSpotifyEnabled } = SpotifySlice.actions;
  const [denied, setDenied] = useState(false);

  useEffect(() => {
    dispatch(getUser())
    !spotifyEnabled  && dispatch(setSpotCode())
  },[])

  useEffect(() => {
      if(expiresIn > 0 && refreshToken.length > 1 && accessToken.length > 1){
        dispatch(setSpotifyEnabled({ value: true }))
      } else {
        dispatch(setSpotifyEnabled({ value: false }))
      }
  },[loginResponse])
  

  useEffect(() => {
    !spotifyEnabled  && dispatch(getLoginData(code))
  },[code])
  console.log({
    expiresIn, refreshToken, accessToken, spotifyEnabled
  })


  const redirectLogin = () => { navigate('/signin') }

  useEffect(() => {
    if(user && user?.access === 'Denied' && !spotifyEnabled) {
      setDenied(true)
      setTimeout(redirectLogin, 1500)
    }
    else setDenied(false)
  },[user])


  return (
    <div className={styles.home}>
      <title>{t.appName}&nbsp;|&nbsp;{t.title.home}</title>
      {denied && <AccessDenied/>}
    </div>
  )
}
