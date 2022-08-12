import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
/* Store */
import { RootState, useAppDispatch } from 'src/services/Store';
import SpotifySlice,{ getCurrentPlayback } from 'src/application/Spotify';
import ListsSlice, { getLists, addTrack } from 'src/application/Lists';

/* Modules */
import { Snakbar } from '../../Atoms/Snackbar';
import { DefaultModal } from '../DefaultModal';
import { ButtonModule } from '../../Atoms/Button';
import { Loading } from '../../Layouts/Loading';

/* Styles */
import styles from './AlbumList.styles';

export const AlbumList = () => {
  const dispatch = useAppDispatch();
  const { theme, t } = useSelector((state: RootState) => state.Settings);
  const { album, currentPlayback, selectedData, accessToken } = useSelector((state: RootState) => state.Spotify);
  const { lists, addTrackResponse, loading } = useSelector((state: RootState) => state.Lists);
  const { setAddTrackResponse } = ListsSlice.actions;
  const { setSelectedData } = SpotifySlice.actions;
  const [current, setCurrent] = useState<any>(null)
  const [showAddList, setShowAddList] = useState({ id: undefined, enabled: false })

  const [alert, setAlert] = useState({ message: '', type: '', open: false })
  const [openAdd, setOpenAdd] = useState(false);
  const [newTrack, setNewTrack]  = useState<{trackId: string|undefined, listId: string|undefined, item: any}>({ trackId: '', listId: '', item: { } })

  const classes = styles(theme);

  const returnDuration = (duration) => {
    if(duration){
      const convertDuration = ((duration / 1000) / 60).toString()
      const valueOne = convertDuration && convertDuration.includes('.') && convertDuration.split('.')[0]
      const valueTwo =convertDuration && convertDuration.includes('.') && convertDuration.split('.')[1].slice(0,2)
      return `${valueOne}:${valueTwo}`
    } else {
      return '00:00'
    }
  }
  const handleTrack = (item) => {
    dispatch(setSelectedData({ item: item }))
  }
  useEffect(() => {
    if (selectedData) {
      setTimeout(() => { handleReload() }, 4500)
    }
  },[ selectedData])

  useEffect(() =>{ dispatch(getLists()) },[])

  
  useEffect(() => {currentPlayback && setCurrent(currentPlayback) },[currentPlayback])

  const handleReload = () => {
    dispatch((getCurrentPlayback({ accessToken: accessToken })))
  }

  const handleAddTrack = (data) => {
    setNewTrack({
      trackId: data.trackId,
      listId: data.listId,
      item: data.item
    })
    setOpenAdd(!openAdd)
  }

  const handleSubmitTrack = () => {
    dispatch(addTrack(newTrack))
    setOpenAdd(!openAdd)
  }

  const handleClean = () => {
    dispatch(setAddTrackResponse({ value: undefined }))
  }

  useEffect(() => {
    if(addTrackResponse && addTrackResponse === 'Error'){
      setAlert({ message: t.errors.addTrack, type: 'error', open: true })
      setTimeout(handleClean, 1500)
    } else if (addTrackResponse && addTrackResponse !== 'Error'){
      setAlert({ message: t.alerts.addTrack, type: 'success', open: true })
      setTimeout(handleClean, 1500)
    } else {
      setAlert({ message: '', type: '', open: false })
    }
  },[addTrackResponse])


  return (
    <div className={classes.root}>
      {loading && <Loading/> }
      <Snakbar
        open={alert.open}
        setOpen={() => setAlert({message: '', type: '', open: false})}
        type={alert.type}
        message={alert.message}
      />
      {openAdd && (
          <DefaultModal 
            open={openAdd} 
            setOpen={setOpenAdd}
            error={false}
            onChange={() => null}
            entry
            type="ADD_TRACK"
            lists={lists}
            title={t.selectList}
            setAddData={setNewTrack}
            addData={newTrack}
            button={(
              <ButtonModule
                text={t.add}
                onClick={() => handleSubmitTrack()}
                submit={false}
              />
            )}
            />
          )} 
      {album && album.tracks && album.tracks.items.length > 0 && album.tracks.items.map(item => (
        <div key={item.id} className={
          current && current?.item?.id === item.id ? classes.equal : classes.containerItem
          }
          onMouseEnter={() => setShowAddList({ id: item.id, enabled: true })}
          onMouseLeave={() => setShowAddList({ id: undefined, enabled: false })}
          >
          <p className={classes.itemText} onClick={() => handleTrack(item)}>
            <span className={classes.trackNumber}>
              {item.track_number}
            </span>
            {item.name}     
          </p>
          <div style={{ position: 'relative', marginInlineStart: 'auto', height: '100%', display: 'flex', alignItems: 'center'}}>
            <span className={classes.duration}>
              {returnDuration(item.duration_ms)}
            </span>
          {showAddList.id === item.id && (<p className={classes.addOnList} onClick={() => handleAddTrack({ trackId: item.id, listId: '', item: item })}>+{' '}{t.add}</p>)}
          </div>
        </div>
      ))}
    </div>
  )
}