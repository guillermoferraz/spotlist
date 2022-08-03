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
      {searchResults && searchResults.length > 0 && searchResults.map(item => (
        <>{item.images.length > 0 && <div key={item.id}><Card cover={item}/></div> }</>
      ))}
    </div>
  )
}