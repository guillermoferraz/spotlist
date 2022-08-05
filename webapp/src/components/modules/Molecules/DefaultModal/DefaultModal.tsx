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
  button: JSX.Element|JSX.Element[];
  error: boolean;
  onChange: (event: string) => void;
  entry?: boolean;
  title?: string;
}

export const DefaultModal = ({ open, setOpen, button, error, onChange, entry, title}: ModalTypes) => {
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
      </Dialog>
    </div>
  )
}