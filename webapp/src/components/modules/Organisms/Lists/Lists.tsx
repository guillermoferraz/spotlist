import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
/* Store */
import { RootState, useAppDispatch } from "src/services/Store";
import ListsSlice, { saveList, getLists } from "src/application/Lists";

/* Modules */
import { TableList } from "../../Molecules/TableLists/TableList";
import { TrackList } from "../../Molecules/TrackList";
import { ButtonModule } from "../../Atoms/Button";
import { DefaultModal } from "../../Molecules/DefaultModal";
import { Snakbar } from "../../Atoms/Snackbar";

/* styles */
import styles from './Lists.styles';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export const ListsModule = () => {
  const dispatch = useAppDispatch();
  const mediaQueryTheme = useTheme();
  const mobile = useMediaQuery(mediaQueryTheme.breakpoints.down('sm'))
  const { theme, t } = useSelector((state: RootState) => state.Settings);
  const { accessToken } = useSelector((state: RootState) => state.Spotify);
  const { saveListResponse, lists, trackList } = useSelector((state: RootState) => state.Lists);
  const { setSaveResponse } = ListsSlice.actions;
  const classes = styles(theme);

  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState(undefined);
  const [error, setError] = useState(false);
  const [openAlert, setOpenAlert] = useState({ message: '', type: '', open: false })


  const handleCreate = () => {
    setOpenModal(!openModal)
  }

  const handleChange = (value) => {
    setName(value)
  }

  const handleSubmit = () => {
    if (!name) {
      setError(true)
    } else {
      setError(false)
      dispatch(saveList({ name: name, id: undefined }))
    }
  }

  const handleClean = () => {
    setOpenModal(false)
    setOpenAlert({ message: '', open: false, type: '' })
    dispatch(setSaveResponse({ value: undefined }))
    dispatch(getLists())
  }

  useEffect(() => {
    if (saveListResponse && saveListResponse !== 'Error') {
      setOpenAlert({ type: 'success', message: t.alerts.newList, open: true })
      setTimeout(() => { handleClean() }, 1500)
    }
    else if (saveListResponse && saveListResponse === 'Error') {
      setOpenAlert({ type: 'error', message: t.errors.saveList, open: true })
      setTimeout(() => { handleClean() }, 1500)
    } else {
      setOpenAlert({ type: '', message: '', open: false })
    }
  }, [saveListResponse])

  useEffect(() => {
    dispatch(getLists())
  }, [])


  return (
    <div className={!mobile ? classes.root : classes.rootMobile}>
      <Snakbar open={openAlert.open} setOpen={() => setOpenAlert({ open: false, message: '', type: '' })} type={openAlert.type} message={openAlert.message} />
      {!mobile && (
        <>
          <div className={classes.containerLeft}>
            {openModal && (
              <DefaultModal
                open={openModal}
                setOpen={setOpenModal}
                error={false}
                onChange={handleChange}
                entry
                type="CREATE"
                button={(
                  <ButtonModule
                    text={t.create}
                    onClick={() => handleSubmit()}
                    submit={false}
                  />
                )}
              />
            )}
            <ButtonModule
              text={t.createList}
              onClick={() => handleCreate()}
              submit={false}
            />
            {lists && lists.length === 0 ? (
              <h4 className={classes.dontPlayLists} >{t.dontPlaylists}</h4>
            ) : (
              <TableList />
            )}
          </div>
          <div className={classes.containerRight}>
            {trackList && (
              <TrackList />
            )}
          </div>
        </>
      )}
      {mobile && (
        <>
        {openModal && (
             <div className={classes.containerModalMobile}>
               <DefaultModal
                open={openModal}
                setOpen={setOpenModal}
                error={false}
                onChange={handleChange}
                entry
                type="CREATE"
                button={(
                  <ButtonModule
                    text={t.create}
                    onClick={() => handleSubmit()}
                    submit={false}
                  />
                )}
              />
             </div>
            )}
          <div className={classes.containerLeftMobile}>
            <ButtonModule
              text={t.createList}
              onClick={() => handleCreate()}
              submit={false}
            />
            {lists && lists.length === 0 ? (
              <h4 className={classes.dontPlayListsMobile} >{t.dontPlaylists}</h4>
            ) : (
              <TableList />
            )}
          </div>
          <div className={classes.containerRightMobile}>
            {trackList && (
              <TrackList />
            )}
          </div>
        </>
      )}
    </div>
  )
}