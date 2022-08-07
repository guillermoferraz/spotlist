import { useSelector } from "react-redux";
/* store */
import { RootState } from "src/services/Store";

/* Modules */
import { Textfield } from "../../Atoms/Textfield";

/* Styles */
import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import styles from './DefaultModal.styles';

interface ModalTypes {
  open: boolean;
  setOpen: (v: boolean) => void;
  button: JSX.Element | JSX.Element[];
  error: boolean;
  onChange: (event: string) => void;
  entry?: boolean;
  title?: string;
  type: string;
  value?: string;
  lists?: { _id: undefined, name:undefined, userId:undefined, __v:undefined }[]|any
  setAddData?: any;
  addData?: { trackId: string|undefined, listId: string|undefined, item: undefined }
}

export const DefaultModal = ({ open, setOpen, button, error, onChange, entry, title, type, value, lists, addData, setAddData }: ModalTypes) => {
  const { theme, t } = useSelector((state: RootState) => state.Settings);
  const classes = styles(theme);
  const themeMaterial = useTheme();
  const fullScreen = useMediaQuery(themeMaterial.breakpoints.down('md'));
  
  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={() => setOpen(!open)}
        aria-labelledby="responsive-dialog-add-list"
        className={classes.dialog}
      >
        {(type === 'CREATE' || type === 'DELETE') && (
          <div className={classes.container}>
            {title && <h4 className={classes.title}>{title}</h4>}
            {entry && <Textfield
              label={t.labels.name}
              id="list-name-entry-01"
              error={error}
              helperText={t.errors.required}
              autocomplete={false}
              type="text"
              onChange={(event) => onChange(event?.target.value)}
              name="list-name-entry-01"
            />}
            {button && <div className={classes.containerBtn}>{button}</div>}
          </div>
        )}
        {type === 'EDIT' && (
          <div className={classes.container}>
            {title && <h4 className={classes.title}>{title}</h4>}
            {entry && <Textfield
              label={t.labels.name}
              id="list-name-entry-edit-01"
              error={error}
              helperText={t.errors.required}
              autocomplete={false}
              type="text"
              value={value}
              onChange={(event) => onChange(event?.target.value)}
              name="list-name-entry-edit-01"
            />}
            {button && <div className={classes.containerBtn}>{button}</div>}
          </div>
        )}
        {type === 'ADD_TRACK' && (
          <div className={classes.container}>
            {title && <h4 className={classes.title}>{title}</h4>}
            <div className={classes.containerList}>
              {lists && lists.length > 0 && lists.map(list => (
                <div key={list._id} className={list._id === addData?.listId ? classes.itemSelected : classes.item} onClick={() => setAddData({ trackId: addData?.trackId, listId: list._id, item: addData?.item })}>
                  <p>{list.name}</p>
                </div>
              ))}
              {(!lists || lists.length === 0) && <h4 className={classes.dontList} >{t.dontPlaylists}</h4>}
            </div>
            {button && lists && lists.length > 0 && <div className={classes.containerBtn}>{button}</div>}
          </div>
        )}
      </Dialog>
    </div>
  )
}