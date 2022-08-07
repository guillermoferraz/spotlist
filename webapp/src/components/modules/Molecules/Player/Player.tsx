import { useEffect, useState } from "react";

import { useSelector } from "react-redux"
import SpotifyPlayer from 'react-spotify-web-playback';
/* Store */
import { RootState } from "src/services/Store"

/* Styles */
import styles from './Player.styles'

export const Player = () => {
  const { theme } = useSelector((state: RootState) => state.Settings);
  const { accessToken, selectedData } = useSelector((state: RootState) => state.Spotify);
  const classes = styles(theme);

  const [play, setPlay] = useState(true);
  const [selectedTrack, setSelectedTrack] = useState(undefined)
  const [audioData, setAudioData] = useState<any>(null)

  useEffect(() => {
    setAudioData(selectedData)
  },[selectedData])
  
  useEffect(() => {
      if(audioData && audioData.uri) setSelectedTrack(audioData.uri)
      setPlay(true)
  },[audioData])


  const RenderPlayer = (audio) => {
    if(audio) {
      return (
      <SpotifyPlayer
        token={accessToken}
        showSaveIcon
        callback={state => {
          if (!state.isPlaying) setPlay(false)
        }}
        play={play}
        uris={Array.isArray(audio) ? [...audio] : [audio]}
        />
      )
    } else {
      <p>No audio</p>
    }
  }

  return (
    <div className={classes.root}>
      <div>
      </div>
      {RenderPlayer(selectedTrack)}
    </div>

  )
}