import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
/* Store */
import { RootState, useAppDispatch } from "src/services/Store";
import ListsSlice, { deleteList, getLists, updateList } from "src/application/Lists";

/* Modules */
import { DefaultModal } from "../DefaultModal";
import { Loading } from "../../Layouts/Loading";
import { Snakbar } from "../../Atoms/Snackbar";
import { ButtonModule } from "../../Atoms/Button";

/* styles */
import styles from './TableList.styles';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

export const TableList = () => {
  const { theme, t } = useSelector((state: RootState) => state.Settings);
  const classes = styles(theme);
  const dispatch = useAppDispatch();
  const { lists } = useSelector((state: RootState) => state.Lists);
  const { deleteResponse, loading, updateResponse } = useSelector((state: RootState) => state.Lists);
  const { setDeleteResponse, setUpdateResponse } = ListsSlice.actions;

  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedItem, setSelecetedItem] = useState<string|undefined>(undefined)
  const [alert, setAlert] = useState({ message: '', type: '', open: false })
  const [editValues, setEditValues] = useState({_id: '', name :'', userId: '', __v: 0 });


  const handleOpenDelete = (id: undefined) => {
    openDelete && setSelecetedItem(undefined)
    !openDelete && setSelecetedItem(id)
    setOpenDelete(!openDelete)
  }
  const handleOpenEdit = (listData) => {
    setEditValues(listData)
    setOpenEdit(!openEdit)
  }

  const handleSubmitEdit = () => {
    dispatch(updateList(editValues))
    setOpenEdit(!openEdit)
  }

  const handleDelete = () => {
    if(selectedItem) dispatch(deleteList(selectedItem))
    setOpenDelete(!openDelete)
  }

  const handleClean = () => {
    setAlert({ type: '', message: '', open: false })
    dispatch(setDeleteResponse({ value: undefined }))
    dispatch(setUpdateResponse({ value: undefined }))
  }

  useEffect(() => {

    /* Delete list */
    if(deleteResponse && deleteResponse === "Error"){
      setAlert({ type: 'error', message: t.errors.removeList, open: true })
      setTimeout(handleClean, 1500)
    } else if (deleteResponse && deleteResponse !== 'Error'){
      setAlert({ type: 'success', message: t.alerts.removeList, open: true })
      dispatch(getLists())
      setTimeout(handleClean, 1500)
    }
    /* Update List */
    else if(updateResponse && updateResponse === 'Error'){
      setAlert({ type: 'error', message: t.errors.updateList, open: true })
      setTimeout(handleClean, 1500)
    } else if (updateResponse && updateResponse !== 'Error'){
      setAlert({ type: 'success', message: t.alerts.updateList, open: true })
      dispatch(getLists())
      setTimeout(handleClean, 1500)
    } else {
      setAlert({ type: '', message: '', open: false })
    }

  },[deleteResponse, updateResponse])

  const handleChangeEdit = (value) => {
    setEditValues({ ...editValues, name: value })
  }

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
        type="DELETE"
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
      {openEdit && (
          <DefaultModal 
            open={openEdit} 
            setOpen={setOpenEdit}
            error={false}
            onChange={handleChangeEdit}
            entry
            value={editValues.name}
            type="EDIT"
            button={(
              <ButtonModule
                text={t.edit}
                onClick={() => handleSubmitEdit()}
                submit={false}
              />
            )}
            />
          )} 

      {lists && lists.map(list => (
        <div key={list._id} className={classes.containerItem}>
          <p onClick={() => console.log('selected data')}>{list.name}</p>
          <p>
              <DeleteForeverIcon onClick={() => handleOpenDelete(list._id)}/>
              <ModeEditIcon onClick={()=> handleOpenEdit(list)}/>
          </p>
        </div>
      ))}
    </div>
  )
}