import { useSelector } from 'react-redux'
/* Store */
import { RootState } from 'src/services/Store'
import { useAppDispatch } from 'src/services/Store'
import SpotifySlice from 'src/application/Spotify'
/* styles */
import styles from './Card.styles'

export const Card = ({ cover }) => {
  const dispatch = useAppDispatch();
  const { theme } = useSelector((state: RootState) => state.Settings);
  const { setSelectedData } = SpotifySlice.actions;
  const classes = styles(theme);

  const handleSelected = (data) => {
    dispatch(setSelectedData({item: data}))
  }
  return (
    <div className={classes.root} onClick={() => handleSelected(cover)}>
      <img src={cover.images[0].url}/>
    </div>
  )
}