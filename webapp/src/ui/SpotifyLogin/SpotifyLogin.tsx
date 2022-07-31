import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import env from 'src/application/env';

/* Store */
import { RootState, useAppDispatch } from "src/services/Store";

/* Modules */
import { Logo } from 'src/components/modules/Atoms/Logo';
import { Loading } from 'src/components/modules/Layouts/Loading';

import { SplitScreen } from 'src/components/modules/Organisms/SplitScreen';
import { ButtonModule } from 'src/components/modules/Atoms/Button';
/* Styles */
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import styles from './Spotify.styles';

export const SpotifyLogin = () => {
  const navigate = useNavigate();
  const mediaQueryTheme = useTheme()
  const dispatch = useAppDispatch();
  const mobile = useMediaQuery(mediaQueryTheme.breakpoints.down('sm'))
  const { theme, t } = useSelector((state: RootState) => state.Settings);
  const classes = styles(theme)

  const redirect = `https://accounts.spotify.com/authorize?client_id=${env.clientId}&response_type=code&redirect_uri=${env.redirect}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`

  return (
    <div className={classes.root}>
      <title>{`${t.appName} | ${t.title.signin}`}</title>
      <div className={!mobile ? classes.split : classes.noSplit}>
      {!mobile && <SplitScreen/>}
      <section className={classes.content}>
        {mobile && <Logo />}
        <div className={classes.container}>
          <h4 className={classes.text}>{t.spotifyInfo}</h4>
          <img src="https://cdn.cdnlogo.com/logos/s/47/spotify.svg"/>
          <ButtonModule
            text={t.buttons.getInto}
            onClick={() => window.location.replace(redirect)}
            submit={false}
          />         
        </div>
      </section>
      </div>
    </div>
  )
}