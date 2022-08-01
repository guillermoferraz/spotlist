import { useSelector } from 'react-redux'
/* Store */
import { RootState } from 'src/services/Store'

/* Modules */
import { Card } from '../../Molecules/Card'

/* styles */
import styles from './CardGroup.styles'

export const CardGroup = ({ searchResults }) => {
  const { theme } = useSelector((state: RootState) => state.Settings);
  const classes = styles(theme);

  return (
    <div className={classes.root}>
      {searchResults && searchResults.map(item => (
        <>{item.album.images.length > 0 && <Card cover={item.album}/> }</>
      ))}
    </div>
  )
}