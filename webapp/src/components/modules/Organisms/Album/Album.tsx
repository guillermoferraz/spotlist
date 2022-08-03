import { useSelector } from "react-redux"

/* Styles */
import styles from './Album.styles';
/* Store */
import { RootState } from "src/services/Store"

/* Modules */
import { AlbumList } from "../../Molecules/AlbumList";

export const AlbumModule = () => {
  const { theme } = useSelector((state: RootState) => state.Settings);
  const { album } = useSelector((state: RootState) => state.Spotify);
  const classes = styles(theme);

  console.log('album:', album)

  const returnName = (artists) => {
    if (artists) {
      return artists.map(artist => (
        <>{artist.name}{''}{artists.length > 1 ? '/' : ''}</>
      ))
    }
  }

  return (
    <div className={classes.root}>
      {album &&
        <div className={classes.content}>
          <h4 className={classes.artistName}>{returnName(album.artists)}</h4>
          <div className={classes.containerFlex}>
            <div className={classes.conteinerImg}>
              <img src={album?.images[0]?.url} />
            </div>
            <AlbumList />
          </div>
        </div>
      }
    </div>
  )
}