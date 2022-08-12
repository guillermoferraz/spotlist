import { useEffect, useState } from "react";
import { useSelector } from "react-redux"

/* Styles */
import styles from './Album.styles';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
/* Store */
import { RootState, useAppDispatch } from "src/services/Store"

/* Modules */
import { AlbumList } from "../../Molecules/AlbumList";
import { getAlbum } from "src/application/Spotify";

export const AlbumModule = () => {
  const dispatch = useAppDispatch();
  const mediaQueryTheme = useTheme();
  const mobile = useMediaQuery(mediaQueryTheme.breakpoints.down('sm'))
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
  }, [selectedData, currentPlayback])

  useEffect(() => {
    if (albumData && albumData.album) {
      dispatch(getAlbum({ accessToken: accessToken, id: albumData.album.id }))
    }
  }, [albumData])

  return (
    <div className={!mobile ? classes.root : classes.rootMobile}>
      {album &&
        <>
          {!mobile && (
            <div className={classes.content}>
              <h4 className={classes.artistName}>{returnName(album.artists)}{album.name}</h4>
              <div className={classes.containerFlex}>
                <div className={classes.conteinerImg}>
                  <img src={album?.images[0]?.url} />
                </div>
                <AlbumList />
              </div>
            </div>
          )}
          {mobile && (
            <div className={classes.contentMobile}>
              <h4 className={classes.artistNameMobile}>{returnName(album.artists)}{album.name}</h4>
              <div className={classes.containerFlexMobile}>
                <div className={classes.conteinerImgMobile}>
                  <img src={album?.images[0]?.url} />
                </div>
                <div className={classes.containerAlbumList}>
                  <AlbumList />
                </div>
              </div>
            </div>
          )}
        </>
      }
    </div>
  )
}