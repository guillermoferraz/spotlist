import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "src/services/Store";

/* Modules */
import { Logo } from 'src/components/modules/Atoms/Logo';
import { Textfield } from "src/components/modules/Atoms/Textfield";
import { ButtonModule } from 'src/components/modules/Atoms/Button';

import { CONSTANTS_ENTRY } from "src/components/schemas/Auth.Schema";

/* Styles */
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from './Signin.styles';

export const Signin = () => {
  const navigate = useNavigate();
  const mediaQueryTheme = useTheme()
  const mobile = useMediaQuery(mediaQueryTheme.breakpoints.down('sm'))
  const { theme, t } = useSelector((state: RootState) => state.Settings);
  const classes = styles(theme)

  const handleSubmit = () => {
    console.log("submit data")
  }

  return (
    <div className={classes.root}>
      <title>{`Spotlist | ${t.title.signin}`}</title>
      <section className={classes.content}>
        {mobile && <Logo />}
        <h1 className={classes.title}>{t.title.signin}</h1>
        <form className={classes.form} onSubmit={handleSubmit} action="#">
          <div className={classes.containerInput}>
            <Textfield
              id={`${CONSTANTS_ENTRY.email}-signin`}
              name={CONSTANTS_ENTRY.email}
              label={t.labels.email}
              error={false}
              helperText={"Error en email"}
              autocomplete={false}
              type={CONSTANTS_ENTRY.email}
              onChange={(event) => null }
            />
          </div>
          <div className={classes.containerInput}>
            <Textfield
              id={`${CONSTANTS_ENTRY.password}-signin`}
              name={CONSTANTS_ENTRY.password}
              label={t.labels.password}
              error={false}
              helperText={"Error en password"}
              autocomplete={false}
              type={CONSTANTS_ENTRY.password}
              onChange={(event) => null }
            />
          </div>
          <p className={classes.infoText}>{t.labels.notRememberPassword}&nbsp;<span>{t.labels.recover}</span></p>
          <div className={classes.containerBtn}>
            <ButtonModule 
              text={t.buttons.signin}
              submit
            />
          </div>
          <p className={classes.infoText}>{t.labels.notHaveAccount}&nbsp;<span onClick={() => navigate("/signup")}>{t.title.signup}</span></p>
        </form>
      </section>
    </div>
  )
}