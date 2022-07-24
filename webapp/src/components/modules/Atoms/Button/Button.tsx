import { useSelector } from "react-redux";
import { RootState } from "src/services/Store";
import { ButtonTypes } from "./Button.types";

import Button from '@mui/material/Button';

/* Styles */
import styles from './Button.styles';

export const ButtonModule = ({ text, onClick, submit }: ButtonTypes) => {
  const { theme } = useSelector((state: RootState) => state.Settings);
  const classes = styles(theme);

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        onClick={() => onClick ? onClick() : null}
        type={submit ? "submit" : "button"}
      >
        {text || "Button"}
      </Button>
    </div>
  )
}