import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
/* Store */
import { RootState, useAppDispatch } from "src/services/Store";
import ListsSlice, { deleteList, getLists } from "src/application/Lists";

/* Modules */
import { DefaultModal } from "../DefaultModal";
import { Loading } from "../../Layouts/Loading";
import { Snakbar } from "../../Atoms/Snackbar";

/* styles */
import styles from './TableList.styles';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { ButtonModule } from "../../Atoms/Button";

export const TableList = () => {
  const { theme, t } = useSelector((state: RootState) => state.Settings);
  const classes = styles(theme);
  const dispatch = useAppDispatch();
  const { lists } = useSelector((state: RootState) => state.Lists);
  const { deleteResponse, loading } = useSelector((state: RootState) => state.Lists);
  const { setDeleteResponse } = ListsSlice.actions;

  const [openDelete, setOpenDelete] = useState(false);
  const [selectedItem, setSelecetedItem] = useState<string|undefined>(undefined)
  const [alert, setAlert] = useState({ message: '', type: '', open: false })


  const handleOpenDelete = (id: undefined) => {
    openDelete && setSelecetedItem(undefined)
    !openDelete && setSelecetedItem(id)
    setOpenDelete(!openDelete)
  }
  const handleDelete = () => {
    if(selectedItem) dispatch(deleteList(selectedItem))
    setOpenDelete(!openDelete)
  }

  const handleClean = () => {
    setAlert({ type: '', message: '', open: false })
    dispatch(setDeleteResponse({ value: undefined }))
  }

  useEffect(() => {
    if(deleteResponse && deleteResponse === "Error"){
      setAlert({ type: 'error', message: t.errors.removeList, open: true })
      setTimeout(handleClean, 1500)
    } else if (deleteResponse && deleteResponse !== 'Error'){
      setAlert({ type: 'success', message: t.alerts.removeList, open: true })
      dispatch(getLists())
      setTimeout(handleClean, 1500)
    } else {
      setAlert({ type: '', message: '', open: false })
    }
  },[deleteResponse])

  return (
    <div className={classes.root}>
      {loading && <Loading/>}
      {alert.open && (<Snakbar
        open={alert.open}
        setOpen={() => setAlert({ message: '', type: '', open: false })}
        type={alert.type}
        message={alert.message}
      />)}
      <DefaultModal
        open={openDelete}
        setOpen={setOpenDelete}
        error={false}
        title={t.confirmDelete}
        onChange={() => null}
        button={[
          <div className={classes.containerBtn}>
          <ButtonModule 
            text="Cancel"
            submit={false}
            onClick={() => handleOpenDelete(undefined)}
          />
          <ButtonModule 
          text="Delete"
          submit={false}
          onClick={() => handleDelete()}
        />
        </div>
        ]}
      />

      {lists && lists.map(list => (
        <div key={list._id} className={classes.containerItem}>
          <p onClick={() => console.log('selected data')}>{list.name}</p>
          <p><DeleteForeverIcon onClick={() => handleOpenDelete(list._id)}/></p>
        </div>
      ))}
    </div>
  )
}