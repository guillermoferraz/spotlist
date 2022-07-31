import { useSelector } from 'react-redux'
/* Store */
import { RootState } from 'src/services/Store'
/* styles */
import styles from './Card.styles'

export const Card = ({ cover }) => {
  const { theme } = useSelector((state: RootState) => state.Settings);
  const classes = styles(theme);
  console.log('cover s:', cover)
  return (
    <div className={classes.root}>
      <img src={cover}/>
    </div>
  )
}