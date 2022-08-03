import { useSelector } from 'react-redux'
/* Store */
import { RootState } from 'src/services/Store'
import { useAppDispatch } from 'src/services/Store'
import SpotifySlice, { getAlbum } from 'src/application/Spotify'
import SettingsSlice from 'src/application/Settings'
/* styles */
import styles from './Card.styles'

export const Card = ({ cover }) => {
  const dispatch = useAppDispatch();
  const { theme } = useSelector((state: RootState) => state.Settings);
  const { setSelectedData } = SpotifySlice.actions;
  const { accessToken } = useSelector((state: RootState) => state.Spotify);
  const { setLayout } = SettingsSlice.actions;
  const classes = styles(theme);

  const handleSelected = (data) => {
    dispatch(setSelectedData({item: data}))
    dispatch(getAlbum({ accessToken: accessToken, id: data.id }))
    dispatch(setLayout({value: 'ALBUM'}))
  }
  return (
    <div className={classes.root} onClick={() => handleSelected(cover)}>
      <img src={cover.images[0].url}/>
      <p>{cover.name}</p>
    </div>
  )
}