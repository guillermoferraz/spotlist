import { useEffect, useState } from "react";
import { useSelector } from "react-redux"

/* Styles */
import styles from './Album.styles';
/* Store */
import { RootState, useAppDispatch } from "src/services/Store"

/* Modules */
import { AlbumList } from "../../Molecules/AlbumList";
import { getAlbum } from "src/application/Spotify";

export const AlbumModule = () => {
  const dispatch = useAppDispatch();
  const { theme } = useSelector((state: RootState) => state.Settings);
  const { album, selectedData, accessToken, currentPlayback } = useSelector((state: RootState) => state.Spotify);
  const [albumData, setAlbumData] = useState<any>(null);

  const classes = styles(theme);

  const returnName = (artists) => {
    if (artists) {
      return artists.map(artist => (
        <>{artist.name}{''}{artists.length > 1 ? '/' : ''}{' '}</>
      ))
    }
  }

  useEffect(() => {
    setAlbumData(selectedData)
  },[selectedData, currentPlayback])

  useEffect(() => {
   if(albumData && albumData.album) {
     dispatch(getAlbum({ accessToken: accessToken, id: albumData.album.id }))
   } 
 },[albumData])

  return (
    <div className={classes.root}>
      {album &&
        <div className={classes.content}>
          <h4 className={classes.artistName}>{returnName(album.artists)}{album.name}</h4>
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