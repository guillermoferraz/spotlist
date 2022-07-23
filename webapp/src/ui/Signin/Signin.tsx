import { useSelector } from "react-redux";
import { RootState } from "../../services/Store";

/* Styles */
import { useTheme } from "@mui/material/styles";
import useMediaQuery  from "@mui/material/useMediaQuery";
import styles from './Signin.styles';

export const Signin = () => {
  const mediaQueryTheme = useTheme()
  const mobile = useMediaQuery(mediaQueryTheme.breakpoints.down('sm'))
  const { theme, t} = useSelector((state: RootState) => state.Settings);
  const classes = styles(theme)

  return (
    <div className={classes.root}>
      Sign in page
    </div>
  )
}